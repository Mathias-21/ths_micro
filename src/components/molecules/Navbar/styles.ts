import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  max-height: 70px;
  background-color: #005f2b;
  padding: 0 40px;
  position: fixed;
  bottom: 0;
`;

export const AreaIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #f0f; */
`;

interface Props {
  isActive: boolean;
}

export const Icon = styled.div<Props>`
  min-width: 22px;
  min-height: 22px;
  width: 22px;
  height: 22px;
  background-color: ${({ isActive }) => (isActive ? "#f00" : "#ccc")};
`;

export const NamePage = styled.p<Props>`
  margin-top: 3px;
`;
