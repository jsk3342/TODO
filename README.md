# 프로젝트 개요

투두 리스트 구현
## 프로젝트 실행

- `yarn install` 후 `yarn start`로 실행하여 확인 가능합니다.

## 사용 기술

React (with functional components and hooks)
React Query (for data fetching)
styled-components (for styling)
TypeScript
MSW
## TODO 구성

StatusContext: 할 일 목록 애플리케이션에서 사용되는 상태 값을 저장하는 React 컨텍스트입니다. StatusContextProvider 컴포넌트는 하위 컴포넌트들에게 컨텍스트 값을 제공하는 역할을 하며, 하위 컴포넌트에서 상태를 변경하면 해당 변경 사항이 자동으로 컨텍스트에서 관리됩니다.

StatusBar: 할 일 목록의 총 작업 수와 작업 상태를 변경할 수 있는 칩을 제공하는 컴포넌트입니다.

TodoList: 전체 할 일 목록 애플리케이션의 주요 구성 요소입니다. 애플리케이션의 제목과 함께 TodoForm, StatusBar, filteredTodoList, Todos 등을 포함하는 헤더를 표시합니다. filteredTodoList는 useMemo를 사용하여 상태가 변경될 때만 리랜더링되도록 최적화되었습니다.

TodoForm: 사용자가 할 일 목록에 새 작업을 추가할 수 있는 구성 요소입니다.

Todo: 할 일 목록의 각 작업을 표시하는 구성 요소입니다. 작업 텍스트와 해당 상태를 표시합니다.

## 폴더 구조
```
src
 ┣ apis
 ┃ ┣ base
 ┃ ┃ ┣ addTodos.ts
 ┃ ┃ ┣ deleteTodos.ts
 ┃ ┃ ┣ editTodos.ts
 ┃ ┃ ┣ getTodos.ts
 ┃ ┃ ┗ url.ts
 ┃ ┗ instance
 ┃ ┃ ┗ index.ts
 ┣ container
 ┃ ┗ todolist
 ┃ ┃ ┣ components
 ┃ ┃ ┃ ┣ common
 ┃ ┃ ┃ ┃ ┗ statusBar
 ┃ ┃ ┃ ┃ ┃ ┣ components
 ┃ ┃ ┃ ┃ ┃ ┃ ┗ Chip.tsx
 ┃ ┃ ┃ ┃ ┃ ┣ StatusBar.tsx
 ┃ ┃ ┃ ┃ ┃ ┗ index.ts
 ┃ ┃ ┃ ┣ utils
 ┃ ┃ ┃ ┃ ┗ formatDate.ts
 ┃ ┃ ┃ ┣ Todo.tsx
 ┃ ┃ ┃ ┗ TodoForm.tsx
 ┃ ┃ ┣ contexts
 ┃ ┃ ┃ ┗ StatusContext.tsx
 ┃ ┃ ┣ TodoList.tsx
 ┃ ┃ ┗ index.ts
 ┣ mocks
 ┃ ┣ browser.ts
 ┃ ┗ handlers.ts
 ┣ models
 ┃ ┗ todo.ts
 ┣ queries
 ┃ ┣ useAddTodos.ts
 ┃ ┣ useDeleteTodos.ts
 ┃ ┣ useEditTodos.ts
 ┃ ┗ useGetTodos.ts
 ┣ App.tsx
 ┣ index.css
 ┣ index.tsx
 ┣ react-app-env.d.ts
 ┣ reportWebVitals.ts
 ┗ setupTests.ts
 ```
## 구현 리스트

- mock api를 구현하고 todo 앱이 해당 api를 통해서 작동하도록 구현되었습니다.
- 사용자는 문자열로 된 todo를 추가 할 수 있습니다.
- 작성일, 최종수정일, 내용, 참조하고 있는 todo들의 id가 표시됩니다.
- 사용자는 todo를 완료 또는 미완료로 상태변경을 할 수 있습니다.
- todo는 다른 todo들을 참조할 수 있습니다.
- 참조하고 있는 todo들이 모두 완료 상태가 아니라면 todo를 완료할 수 없습니다.
- 사용자는 todo 목록을 조회할 수 있습니다.
- 사용자는 todo를 수정할 수 있습니다.
- 사용자는 todo를 삭제할 수 있습니다.
- 작성일, 최종수정일, 내용, 참조하고 있는 todo들의 id가 표시됩니다.
- todo는 다른 todo들을 참조할 수 있습니다.
- 참조하고 있는 todo들이 모두 완료 상태가 아니라면 todo를 완료할 수 없습니다.
### 미구현 리스트
- 무한 스크롤

