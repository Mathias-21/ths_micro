import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #09359f;
  padding-top: 30px;
`;

export const AreaContents = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 30px 30px 0 0;
  padding: 20px 10px 0;
  margin-top: 6px;
  overflow-y: scroll;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  background-color: #ccc;
  border-radius: 10px;
  padding: 0 10px;
  outline: none;
`;

export const Button = styled.button`
  min-width: 55px;
  max-width: 55px;
  min-height: 55px;
  max-height: 55px;
  background-color: #09359f;
  border-radius: 50%;
  padding: 10px 0;
  border: none;
  color: #fff;
  font-size: 30px;
  position: fixed;
  bottom: 85px;
  right: 15px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 15px 0;
  border-bottom: 1px solid #ccc;

  :last-child {
    border-bottom: none;
  }
`;
