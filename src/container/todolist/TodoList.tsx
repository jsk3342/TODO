import styled from "styled-components";
import TodoForm from "./components/TodoForm";
import StatusBar from "./components/statusBar/index";
import Todo from "./components/Todo";
import { useStatusContext } from "./contexts/StatusContext";
import { useGetTodos } from "../../queries/usefetchTodos";

const TodoList = () => {
  const todoList = useGetTodos();
  const { status } = useStatusContext();

  return (
    <Container>
      <Header>
        <Title>Marq-TODO</Title>
        <TodoForm />
      </Header>
      <StatusBar totalCount={todoList.filter(
            todo => status === "ALL" ? todo : status === "Active" ? todo.isCompleted === false :  todo.isCompleted === true).length
          } />
      <Main>
        <TodoWrapper>
          {todoList.filter(
            todo => status === "ALL" ? todo : status === "Active" ? todo.isCompleted === false :  todo.isCompleted === true).map(todo => (
            <Todo key={todo.id} {...todo} />
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
