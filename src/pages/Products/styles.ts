import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #07127c;
  padding-top: 30px;
`;

export const AreaContents = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 30px 30px 0 0;
  padding: 20px 10px 0;
  margin-top: 6px;
`;

export const AreaInputButton = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  margin-bottom: 10px;
  overflow: scroll;
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
  min-width: 40px;
  min-height: 40px;
  background-color: #09359f;
  border-radius: 50%;
  padding: 10px 0;
  border: none;
  color: #fff;
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
