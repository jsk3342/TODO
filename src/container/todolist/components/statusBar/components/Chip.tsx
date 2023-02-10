import React from "react";
import styled, { css } from "styled-components";

interface Chiptypes {
  text: string;
  isFocus: boolean;
  onClick: () => any;
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
  ${chipStyle}/* background-color: inherit; */
`;

const ChipFocusButton = styled.button`
  ${chipStyle}
`;

export default function Chip({ text, isFocus, onClick }: Chiptypes) {
  return (
    <ChipItem onClick={onClick}>
      {isFocus ? (
        <ChipFocusButton>{text}</ChipFocusButton>
      ) : (
        <ChipButton>{text}</ChipButton>
      )}
    </ChipItem>
  );
}
