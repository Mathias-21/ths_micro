import styled, { css } from "styled-components";

interface Props {
  variant: string;
  color: string;
}

export const Container = styled.div<Props>`
  width: 100%;
  color: ${({ color }) => color};
  ${({ variant }) =>
    ({
      default: css`
        font-size: 14px;
      `,
      title: css`
        font-size: 18px;
      `,
    }[variant])}
`;
