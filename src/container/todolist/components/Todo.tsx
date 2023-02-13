import { useState } from "react";
import styled from "styled-components";
import { Message } from "../../../models/todo";
import { useDeleteTodosMutation } from "../../../queries/useDeleteTodos";
import { useEditTodosMutation } from "../../../queries/useEditTodos";

export default function Todo({ title, isCompleted }: Message) {
  const [isEditeMode, setEdited] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const { mutate: editTodosMutation } = useEditTodosMutation();
  const { mutate: deleteTodosMutation } = useDeleteTodosMutation();

  const onClickEditTodos = () => {
    editTodosMutation({ title, newTitle, isCompleted });
    setEdited(false);
    setNewTitle(newTitle);
  };

  return (
    <Wrapper>
      <TodoChecker>
        <CheckBox type={"checkbox"} checked={isCompleted} />
        {!isEditeMode ? (
          !isCompleted ? (
            <TodoTitle>{title}</TodoTitle>
          ) : (
            <TodoCompletedTitle>{title}</TodoCompletedTitle>
          )
        ) : (
          <Input
            type="text"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
          />
        )}
      </TodoChecker>
      <ButtonContainer>
        {!isEditeMode ? (
          <Button onClick={() => setEdited(true)}>Edit</Button>
        ) : (
          <Button onClick={onClickEditTodos}>Save Todo</Button>
        )}
        <Button
          onClick={() => {
            deleteTodosMutation({ title });
          }}
        >
          Delete
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
}

const Wrapper = styled.li`
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

const TodoTitle = styled.h2`
  color: black;
`;

const TodoCompletedTitle = styled.h2`
  color: #adb5bd;
  text-decoration: line-through;
  text-decoration-color: black;
`;

const CheckBox = styled.input`
  zoom: 3;
  margin-right: 5px;
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

const Input = styled.input`
  font-size: 20px;
  border: none;
  outline: none;
`;
