import React from "react";
import { CSSProperties } from "styled-components";
import { Container } from "./styles";

interface TextProps {
  children: React.ReactNode | string;
  variant?: string;
  color?: string;
  style?: CSSProperties;
}

export function Text({ children, variant, style, color }: TextProps) {
  return (
    <Container
      variant={variant ? variant : "default"}
      color={color ? color : "#000"}
      style={style}
    >
      {children}
    </Container>
  );
}
