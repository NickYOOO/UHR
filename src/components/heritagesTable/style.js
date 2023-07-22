import styled from 'styled-components';

export const TableContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  padding: 10px;
  border-bottom: 1px solid #000;
  text-align: left;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f0f0f0;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #000;
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  cursor: pointer;
`;

export const DataResultParagraph = styled.div`
  padding-left: 30px;
`;
