import React, { useState } from "react";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  gap: 10px;
`;

const TodoInput = styled.input`
  height: 30px;
  font-size: 20px;
  padding: 10px 20px;
  flex-grow: 1;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: lightyellow;
`;

const TodoSumitButton = styled.button`
  font-size: 25px;
  font-weight: bold;
  line-height: 25px;
  width: 250px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <FlexBox>
        <TodoInput onChange={onChange} value={todo} />
        <TodoSumitButton>Add Todo</TodoSumitButton>
      </FlexBox>
    </form>
  );
}
