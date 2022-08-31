import React from "react";
import { CSSProperties } from "styled-components";
import { Container } from "./styles";

interface TextProps {
  children: React.ReactNode | string;
  variant?: string;
  color?: string;
  textAlign?: "left" | "center" | "right";
  weight?: number;
  style?: CSSProperties;
  onClick?: () => void;
}

export function Text({
  children,
  variant,
  style,
  color,
  onClick,
  textAlign,
  weight,
}: TextProps) {
  return (
    <Container
      variant={variant ? variant : "default"}
      color={color ? color : "#000"}
      style={style}
      onClick={onClick}
      weight={weight ? weight : 400}
      textAlign={textAlign ? textAlign : "left"}
    >
      {children}
    </Container>
  );
}
