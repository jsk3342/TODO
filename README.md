# 프로젝트 개요

이 프로젝트는 CRUD(Create, Read, Update, Delete) 가능한 투두 리스트를 구현하고, MSW(Mock Service Worker)를 활용하여 목서버를 구현하는 것을 목표로 합니다.

## 프로젝트 실행

- `yarn install` 후 `yarn start`로 실행하여 확인 가능합니다.

## 사용 기술

- React (with functional components and hooks)
- React Query (for data fetching)
- styled-components (for styling)
- TypeScript
- MSW

## TODO 설계

구현 화면

### 서버 상태와 클라이언트 상태 분리

이번 프로젝트에서는 서버의 상태와 클라이언트의 상태를 분리하기 위해 리액트 쿼리를 사용하여 단일 책임 원칙을 지키려고 노력했습니다. 전역으로 관리할 만한 상태가 없고, 복잡도가 낮다고 판단하여 컨텍스트 API를 활용하여 구획에서 관리할 수 있도록 했습니다.

- 서버 상태
  서버 상태는 apis 폴더에 있는 axios 호출을 세팅하고 쿼리 호출 커스텀 훅을 구현하여 관리합니다. 전체 할 일 목록 리스트를 대표적으로 다룹니다. 체크박스, 데이터 수정, 삭제 등의 작업이 수행되면 커스텀 훅이 호출됩니다.

- 클라이언트 상태
  클라이언트 상태는 StatusContext에서 카테고리를 나타내는 칩의 상태를 관리합니다. TodoList를 StatusProvider로 감싸 전역 상태 오염을 방지합니다. StatusContext에 버튼의 상태를 가지고 있으며, 칩 컴포넌트에서 setStatus로 상태를 변경하며, TodoList 컴포넌트에서 status를 활용하여 필터링을 가능하게 합니다.

### 참조를 통한 TODO 리스트 관리

참조를 통한 TODO 리스트 관리는 각각의 테스크가 다른 테스크를 참조할 수 있고, 참조된 테스크가 완료되어야 기존 테스크를 완료할 수 있는 기능을 말합니다. 이를 구현하기 위해 인풋창에는 테스크 내용과 참조할 테스크의 ID를 함께 입력할 수 있도록 구현하였습니다.

서버에서는 참조된 ID를 재귀적으로 탐색하여 완료 여부를 판단할 수 있도록 구현할 수 있지만, 이번 프로젝트에서는 서버에서 데이터를 응답 받고 업데이트 할 때 참조된 ID의 상태 또한 업데이트되기 때문에 하나의 뎁스만 파악해도 문제 없다고 판단하여 구현하였습니다.

따라서, 만약 1, 2를 참조하고 있는 테스크에서 1을 완료했다가 다시 취소하면 해당 테스크는 완료할 수 없도록 처리하였습니다. 이렇게 함으로써 참조된 테스크가 완료되었다가 다시 취소되는 경우, 그에 해당하는 모든 테스크들의 상태도 즉시 반영됩니다.

## TODO 구성

TodoList: 전체 할 일 목록 애플리케이션의 주요 구성 요소입니다. 애플리케이션의 제목과 함께 TodoForm, StatusBar, filteredTodoList, Todos 등을 포함하는 헤더를 표시합니다. filteredTodoList는 useMemo를 사용하여 상태가 변경될 때만 리랜더링되도록 최적화되었습니다.

StatusContext: 할 일 목록 애플리케이션에서 사용되는 상태 값을 저장하는 React 컨텍스트입니다. StatusContextProvider 컴포넌트는 하위 컴포넌트들에게 컨텍스트 값을 제공하는 역할을 하며, 하위 컴포넌트에서 상태를 변경하면 해당 변경 사항이 자동으로 컨텍스트에서 관리됩니다.

StatusBar: 할 일 목록의 총 작업 수와 작업 상태를 변경할 수 있는 칩을 제공하는 컴포넌트입니다.

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
