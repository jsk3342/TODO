import React from "react";
import styled, { css } from "styled-components";

interface Chiptypes {
  children: React.ReactNode;
  isFocus: boolean;
  onClick: () => any;
}

export default function Chip({ children, isFocus, onClick }: Chiptypes) {
  return (
    <ChipItem onClick={onClick}>
      {isFocus ? (
        <ChipFocusButton>{children}</ChipFocusButton>
      ) : (
        <ChipButton>{children}</ChipButton>
      )}
    </ChipItem>
  );
}

const chipStyle = css`
  padding: 10px 16px;
  border-radius: 30px;
  color: black;
  border: 1px solid white;
  font-size: 1.4rem;
  font-weight: 700;
  background-color: lightpink;
  cursor: pointer;
`;

const ChipItem = styled.li`
  list-style: none;
  margin: 0px;
  padding: 0px;
`;

const ChipButton = styled.button`
  ${chipStyle}
  background-color: inherit;
`;

const ChipFocusButton = styled.button`
  ${chipStyle}
`;
