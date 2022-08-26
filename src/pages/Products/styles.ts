import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #c4c4c4;
  padding: 10px 20px;
  border-bottom: 1px solid #777;

  :last-child {
    border-bottom: none;
  }
`;

export const ProductName = styled.p`
  font-size: 18px;
  font-family: sans-serif;
`;

export const ProductPrice = styled.p`
  font-size: 18px;
  font-family: sans-serif;
`;
