import styled, { css } from "styled-components";

interface Props {
  variant: string;
  color: string;
  textAlign: string;
  weight: number;
}

export const Container = styled.div<Props>`
  width: auto;
  color: ${({ color }) => color};
  ${({ variant }) =>
    ({
      default: css`
        font-size: 14px;
      `,
      title: css`
        font-size: 20px;
      `,
      subtitle: css`
        font-size: 16px;
      `,
    }[variant])}
  text-align: ${({ textAlign }) => textAlign};
  font-weight: ${({ weight }) => weight};
`;
