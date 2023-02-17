import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Todolist from "./container/todolist";
import { StatusProvider } from "./container/todolist/contexts/StatusContext";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<div>에러가 발생했습니다.</div>}>
        <Suspense fallback={<div>로딩 중입니다.</div>}>
          <StatusProvider>
            <Todolist />
          </StatusProvider>
        </Suspense>
      </ErrorBoundary>
    </>
  );
}

export default App;
