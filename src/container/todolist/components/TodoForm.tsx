import { useRef } from "react";
import styled from "styled-components";
import { useAddTodoMutation } from "../../../queries/useAddTodos";

export default function TodoForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { mutate } = useAddTodoMutation({
    onSuccess: () => {
      if (inputRef.current == null) {
        return;
      }

      inputRef.current.value = "";
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (inputRef.current == null || inputRef.current.value === "") {
      return;
    }

    mutate({ title: inputRef.current.value });
    inputRef.current.value = "";
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FlexBox>
        <TodoInput ref={inputRef} onKeyDown={handleKeyDown} />
        <TodoSubmitButton type="submit">Add Todo</TodoSubmitButton>
      </FlexBox>
    </form>
  );
}

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

const TodoSubmitButton = styled.button`
  font-size: 25px;
  font-weight: bold;
  line-height: 25px;
  width: 250px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
