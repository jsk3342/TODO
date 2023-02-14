import styled from "styled-components";
import TodoForm from "./components/TodoForm";
import StatusBar from "./components/statusBar/index";
import Todo from "./components/Todo";
import { useContext } from "react";
import { TodoListContext } from "./contexts/TodoListContext";

const TodoList = () => {
  const context = useContext(TodoListContext);
  if (!context) {
    throw new Error("TodoListContext is not defined");
  }
  const { showList } = context;

  return (
    <Container>
      <Header>
        <Title>Marq-TODO</Title>
        <TodoForm />
      </Header>
      <StatusBar totalCount={showList.length} />
      <Main>
        <TodoWrapper>
          {showList.map(todo => (
            <Todo key={todo.title + todo.date} {...todo} />
          ))}
        </TodoWrapper>
      </Main>
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  padding: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Header = styled.header`
  text-align: center;
  padding-bottom: 30px;
`;

const Main = styled.main`
  height: 400px;
  overflow: auto;
`;

const Title = styled.h1`
  font-size: 50px;
  padding-bottom: 30px;
`;

const TodoWrapper = styled.ul`
  height: 400px;
  margin: 0;
  padding: 0;
  font-weight: bold;
`;
