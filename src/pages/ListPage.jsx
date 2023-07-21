import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getHeritagesBySearch } from '../api/heritage';
import { useQuery } from '@tanstack/react-query';
import Loading from '../components/loading/Loading';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import Search from '../components/common/search/Search';

const ListPage = () => {
  const navigate = useNavigate();
  const param = useParams();
  const location = useLocation();
  let { ccbaCtcd, ccbaLcto, ccbaMnm1 } = location.state;
  const searchParams = { ccbaCtcd, ccbaLcto, ccbaMnm1 };
  if (ccbaCtcd === '00') {
    ccbaCtcd = '';
  }
  if (ccbaCtcd === '0') {
    ccbaCtcd = 'ZZ';
  }
  if (ccbaLcto === '0') {
    ccbaLcto = 'ZZ';
  }
  const params = `${ccbaCtcd && `ccbaCtcd=${ccbaCtcd}`}${ccbaCtcd && `&ccbaLcto=${ccbaLcto}`}${
    ccbaMnm1 ? `&ccbaMnm1=${ccbaMnm1}` : ''
  }`;
  let totalCnt = 0;
  let totalPage = 0;
  let searchedHeritageArr = [];

  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['heritageListBySearch', ccbaCtcd, ccbaLcto, ccbaMnm1],
    queryFn: () => getHeritagesBySearch(params),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isSuccess) {
    data.map(item => {
      if (item.name === 'totalCnt') {
        totalCnt = item.value;
        totalPage = Math.ceil(totalCnt / 10);
      }
    });

    searchedHeritageArr = data.filter(item => item.name === 'item');
  }

  const handleOnClickTr = key => {
    navigate(`/detail/${key}`);
  };

  return (
    <div style={{ padding: '60px 0px' }}>
      {/* <SearchPositionBox>
        <Search bg="#082141ad" />
      </SearchPositionBox> */}

      <p>
        조회된 총 데이터 건 수: <strong style={{ fontWeight: 'bolder' }}>{totalCnt}</strong>
      </p>

      <TableContainer>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>순번</TableHeader>
              <TableHeader>문화재 종목</TableHeader>
              <TableHeader>문화재명</TableHeader>
              <TableHeader>지역</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {searchedHeritageArr.map(item => {
              const num = item.children[0].value; // sn
              const key = item.children[1].value; // no(key)
              const kind = item.children[2].value.replace(/ >/g, ''); // ccmaName
              const nameKr = item.children[4].value.replace(/ >/g, ''); // ccbaMnm1
              const nameCh = item.children[5].value.replace(/ >/g, ''); // ccbaMnm2
              const city1 = item.children[6].value.replace(/ >/g, ''); // ccbaCtcdNm
              const city2 = item.children[7].value.replace(/ >/g, ''); // ccsiName

              const ccbaKdcd = item.children[9].value;
              const ccbaCtcd = item.children[10].value;
              const ccbaAsno = item.children[11].value;
              const ccbaCpno = item.children[13].value;

              return (
                <TableRow key={key} onClick={() => handleOnClickTr(ccbaCpno)}>
                  <TableCell>{num}</TableCell>
                  <TableCell>{kind}</TableCell>
                  <TableCell>
                    {nameKr}({nameCh})
                  </TableCell>
                  <TableCell>
                    {city1} / {city2}
                  </TableCell>
                </TableRow>
              );
            })}
          </tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ListPage;

const TableContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 10px;
  border-bottom: 1px solid #000;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f0f0f0;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #000;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  text-align: left;
`;

// const SearchPositionBox = styled.div``;
