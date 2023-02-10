import React from "react";
import styled, { css } from "styled-components";

interface TodoItemTypes {
  text: string;
  isCompleted: boolean;
}

const todoItemStyle = css`
  padding: 10px 16px;
  border-radius: 30px;
  color: black;
  border: 1px solid white;
  font-size: 1.4rem;
  font-weight: 700;
  background-color: lightpink;
  cursor: pointer;
`;

const Todo = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0px;
  padding: 10px;
  background-color: #e9e9e9;
  margin-bottom: 10px;
`;

const TodoChecker = styled.div`
  display: flex;
  font-size: 20px;
`;

const CheckBox = styled.input`
  margin-right: 5px;
  zoom: 3;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: white;
  border-radius: 3px;
  font-size: 20px;
  font-weight: bold;
  border-style: none;
  padding: 0 10px;
  cursor: pointer;
`;

export default function TodoItem({ text, isCompleted }: TodoItemTypes) {
  return (
    <Todo>
      <TodoChecker>
        <CheckBox type={"checkbox"} />
        <h2>todo</h2>
      </TodoChecker>
      <ButtonContainer>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </ButtonContainer>
      {/* {isCompleted ? (
        <ActiveTodo>{text}</ActiveTodo>
      ) : (
        <CompletedTodo>{text}</CompletedTodo>
      )} */}
    </Todo>
  );
}
