import styled from 'styled-components';

export const TransactionTable = styled.tr`
  box-shadow: 2px 4px 5px -2px rgba(0, 0, 0, 0.93);
  margin-bottom: 50px;
`;

export const TransactionValue = styled.td`
  text-align: center;
  width: 150px;
  height: 40px;
`;
export const TransactionItem = styled.tr`
  border: 1px solid #233a4f;
  :nth-child(2n) {
    background-color: #c0d0e8;
  }
  color: black; ;
`;
export const TransactionHead = styled.tr`
  background-color: #6193db;
  color: white;
  height: 30px;
`;
