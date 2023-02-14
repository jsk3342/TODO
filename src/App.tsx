import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import AppButton from "./App copy";
import "./App.css";
import Todolist from "./container/todolist";
import { TodoListContextProvider } from "./container/todolist/contexts/TodoListContext";

function App() {
  return (
    <>
      <AppButton />
      <ErrorBoundary fallback={<div>에러가 발생했습니다.</div>}>
        <Suspense fallback={<div>로딩 중입니다.</div>}>
          <TodoListContextProvider>
            <Todolist />
          </TodoListContextProvider>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
