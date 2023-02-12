import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useAddTodoMutation } from "../../../queries/useAddTodos";

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
  const { mutate: addTodoMutate } = useAddTodoMutation();

  const handleOnClick = useCallback(() => {
    addTodoMutate({
      title: todo,
      isCompleted: false,
      date: Date.now(),
    });
    setTodo("");
  }, [todo, addTodoMutate]);

  return (
    <FlexBox>
      <TodoInput onChange={(e) => setTodo(e.target.value)} value={todo} />
      <TodoSumitButton onClick={handleOnClick}>Add Todo</TodoSumitButton>
    </FlexBox>
  );
}
