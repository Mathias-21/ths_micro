import styled from "styled-components";

interface InputStyleProps {
  width: string;
}

export const InputArea = styled.div<InputStyleProps>`
  width: ${({ width }) => width};
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputBase = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  background-color: #ccc;
  border-radius: 10px;
  padding: 0 10px;
  outline: none;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #777;
    font-weight: 500;
  }
`;
