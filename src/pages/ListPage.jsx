import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getHeritagesBySearch } from '../api/heritage';
import { useQuery } from '@tanstack/react-query';
import Loading from '../components/loading/Loading';
import { useNavigate } from 'react-router-dom';

// 검색 컴포넌트 import 해오면 됩니다

const ListPage = () => {
  const navigate = useNavigate();
  const params = 'ccbaCtcd=11&ccbaMnm1=탑&pageIndex=1';
  let totalCnt = 0;
  let totalPage = 0;
  let searchedHeritageArr = [];

  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['heritageListBySearch'],
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

  const handleOnClickTr = (key, ccbaKdcd, ccbaCtcd, ccbaAsno) => {
    navigate(`/detail/${key}`, {
      state: {
        ccbaKdcd,
        ccbaCtcd,
        ccbaAsno,
      },
    });
  };

  return (
    <div style={{ padding: '60px 0px' }}>
      {/* 검색 컴포넌트 여기에 넣으면 됩니다 */}

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
              const key = item.children[1].value; // no(key)
              const num = item.children[0].value; // sn
              const kind = item.children[2].value.replace(/ >/g, ''); // ccmaName
              const nameKr = item.children[4].value.replace(/ >/g, ''); // ccbaMnm1
              const nameCh = item.children[5].value.replace(/ >/g, ''); // ccbaMnm2
              const city1 = item.children[6].value.replace(/ >/g, ''); // ccbaCtcdNm
              const city2 = item.children[7].value.replace(/ >/g, ''); // ccsiName

              const ccbaKdcd = item.children[9].value;
              const ccbaCtcd = item.children[10].value;
              const ccbaAsno = item.children[11].value;

              return (
                <TableRow
                  key={key}
                  onClick={() => handleOnClickTr(key, ccbaKdcd, ccbaCtcd, ccbaAsno)}
                >
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
