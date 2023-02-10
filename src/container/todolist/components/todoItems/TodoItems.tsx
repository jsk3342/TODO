import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./components/TodoItem";

const Container = styled.ul`
  height: 400px;
  margin: 0;
  padding: 0;
  font-weight: bold;
`;

export default function TodoItems() {
  return (
    <Container>
      <TodoItem
        text={`테스트`}
        isCompleted={false}
        key={`테스트` + Date.now()}
      />
      {/* <TodoItem
        text={`테스트`}
        isCompleted={false}
        key={`테스트` + Date.now()}
      /> */}
    </Container>
  );
}
