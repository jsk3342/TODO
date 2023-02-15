import { useState } from "react";
import styled from "styled-components";
import { Message } from "../../../models/todo";
import { useDeleteTodosMutation } from "../../../queries/useDeleteTodos";
import { useEditTodosMutation } from "../../../queries/useEditTodos";
import formatDate from "../util/formatDate";

export default function Todo({ id, title, isCompleted, refId, regTs, updTs }: Message) {
  const [isEditeMode, setEdited] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const { mutate: editTodosMutation } = useEditTodosMutation();
  const { mutate: deleteTodosMutation } = useDeleteTodosMutation();

  const onClickEditTodos = () => {
    editTodosMutation({ 
      id,
      newTitle,
      isCompleted,
      regTs, 
    });
    setEdited(false);
    setNewTitle(newTitle);
  };

  return (
    <Wrapper>
      <TodoChecker>
        <CheckBox
          type={"checkbox"}
          defaultChecked={isCompleted}
          onClick={() => editTodosMutation({ 
            id,
            newTitle,
            isCompleted: !isCompleted,
            regTs,  
          })}
        />
        <TitleWrapper>
          {!isEditeMode ? (
            !isCompleted ? (
              <TodoTitle>ID:{id} {title}</TodoTitle>
              ) : (
                <TodoCompletedTitle>ID:{id} {title}</TodoCompletedTitle>
                )
                ) : (
                  <Input
                  type="text"
                  value={newTitle}
                  onChange={(event) => setNewTitle(event.target.value)}
                  />
                  )}
          <div>
            <span>참조 id : {refId}</span>
            <span>등록일 : {formatDate(regTs)}</span>
            <span>수정일 : {updTs}</span>
          </div>
        </TitleWrapper>
      </TodoChecker>
      <ButtonContainer>
        {!isEditeMode ? (
          <Button onClick={() => setEdited(true)}>Edit</Button>
        ) : (
          <>
            <Button onClick={onClickEditTodos}>Save Todo</Button>
            <Button onClick={() => {setEdited(false); setNewTitle(title)}}>Cancel</Button>
          </>
        )}
        <Button
          onClick={() => {
            deleteTodosMutation({ id });
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

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

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
  background-color: inherit;
`;
