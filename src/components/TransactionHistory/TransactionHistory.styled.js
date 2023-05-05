import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  width: 60%;
  font-size: 16px;
  margin: 0 auto;
`;

export const TableHeader = styled.thead`
  background-color: lightblue;
`;

export const TableHeaderRow = styled.tr`
  font-weight: bold;
`;

export const TableCell = styled.th`
  padding: 12px 15px;
  text-align: center;
`;

export const TableBody = styled.tbody``;


export const TableBodyRow = styled.tr`
background-color: wh;

  :nth-of-type(2n) {
    background-color: white;
  }`;

export const TableDataCell = styled.td`
  padding: 5px 10px;
  text-align: center;
`;