import React from 'react';
import styled from 'styled-components';

// 검색 컴포넌트 import 해오면 됩니다

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

const ListPage = () => {
  const listData = [
    {
      sn: 1,
      ccmaName: '국보',
      ccbaMnm1: '서울 숭례문(서울 崇禮門)',
      ccbaCtcdNm: '서울 / 중구',
    },
    {
      sn: 2,
      ccmaName: '국보',
      ccbaMnm1: '서울 숭례문(서울 崇禮門)',
      ccbaCtcdNm: '서울 / 중구',
    },
    {
      sn: 3,
      ccmaName: '국보',
      ccbaMnm1: '서울 숭례문(서울 崇禮門)',
      ccbaCtcdNm: '서울 / 중구',
    },
    {
      sn: 4,
      ccmaName: '국보',
      ccbaMnm1: '서울 숭례문(서울 崇禮門)',
      ccbaCtcdNm: '서울 / 중구',
    },
  ];

  return (
    <>
      {/* 검색 컴포넌트 여기에 넣으면 됩니다 */}

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
            {listData.map(item => (
              <TableRow key={item.sn}>
                <TableCell>{item.sn}</TableCell>
                <TableCell>{item.ccmaName}</TableCell>
                <TableCell>{item.ccbaMnm1}</TableCell>
                <TableCell>{item.ccbaCtcdNm}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListPage;
