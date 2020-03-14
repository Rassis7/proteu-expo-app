import React from "react";

import { Container, ViewButton, TextButton } from "./styles";

export default function Button({
  children,
  onPress,
  w,
  h,
  background,
  mt,
  mb,
  borderColor,
  color,
  fontSize
}) {
  return (
    <Container
      w={w}
      h={h}
      mt={mt}
      mb={mb}
      background={background}
      onPress={onPress}
    >
      <ViewButton w={w} h={h} borderColor={borderColor}>
        <TextButton color={color} fontSize={fontSize}>
          {children}
        </TextButton>
      </ViewButton>
    </Container>
  );
}
