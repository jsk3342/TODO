import { Suspense, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useGetTodos } from "../../queries/usefetchTodos";
import styled from "styled-components";
import TodoForm from "./components/TodoForm";
import StatusBar from "./components/statusBar/index";
import TodoItems from "./components/todoItems/index";

const Container = styled.div`
  padding: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Header = styled.header`
  text-align: center;
  padding-bottom: 30px;
`;

const Main = styled.main``;

const Title = styled.h1`
  font-size: 50px;
  padding-bottom: 30px;
`;

const TodoList = () => {
  const fetchTodos = useGetTodos();
  const [todos, setTodos] = useState(fetchTodos);
  console.log(todos);
  useEffect(() => {}, [todos]);
  return (
    <Container>
      <ErrorBoundary fallback={<div>에러가 발생했습니다.</div>}>
        <Suspense fallback={<div>로딩 중입니다.</div>}>
          <Header>
            <Title>Marq-TODO</Title>
            <TodoForm />
          </Header>
          <Main>
            <StatusBar />
            <TodoItems />
          </Main>
        </Suspense>
      </ErrorBoundary>
    </Container>
  );
};

export default TodoList;
