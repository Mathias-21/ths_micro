import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 30px 20px;
  border-radius: 30px 30px 0 0;
`;

export const InfoArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 170px;
  margin-top: 20px;
`;

export const AreaPrice = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ListAdditionals = styled.ul`
  list-style: none;
`;
