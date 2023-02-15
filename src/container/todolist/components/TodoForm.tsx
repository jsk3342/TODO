import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { useAddTodoMutation } from "../../../queries/useAddTodos";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const [refId, setRefId] = useState("");
  const { mutate: addTodoMutate } = useAddTodoMutation();
  const nextId = useRef(4);
  const handleOnClick = useCallback(() => {
    addTodoMutate({
      id: nextId.current,
      title: todo,
      refId: refId.split(",").map(v => +v),
      regTs: Date.now(),
    });
    setTodo("");
    setRefId("")
    nextId.current += 1;
  }, [todo, addTodoMutate, refId]);

  return (
    <FlexBox>
      <InputWrapper>
        <TodoInput placeholder="TODO 내용 입력" onChange={(e) => setTodo(e.target.value)} value={todo} />
        <RefIdInput placeholder="참조 Id 입력 , 사용 ex) 1,2" onChange={(e) => setRefId(e.target.value)} value={refId} />
      </InputWrapper>
      <TodoSumitButton onClick={handleOnClick}>Add Todo</TodoSumitButton>
    </FlexBox>
  );
}

const FlexBox = styled.div`
  display: flex;
  gap: 60px;
`;

const TodoInput = styled.input`
  height: 30px;
  margin-bottom: 5px;
  width: 100%;
  font-size: 20px;
  padding: 10px 20px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: lightyellow;
`;

const InputWrapper = styled.div`
  flex-grow: 1;
`

const RefIdInput = styled.input`
  height: 30px;
  width: 100%;
  font-size: 20px;
  padding: 10px 20px;
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