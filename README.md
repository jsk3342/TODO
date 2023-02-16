## 프로젝트 실행

- 원하는 패키지 관리자를 이용하여 의존성을 설치해주세요. `yarn install` 후 `yarn start`로 실행하여 확인 가능합니다.

## TODO 구성

StatusContext: 할 일 목록 애플리케이션에 필요한 상태 값을 보유하는 React 컨텍스트입니다. StatusContext 상태를 저장하는 데 사용되는 컨텍스트 개체이고 StatusContextProvider는 자식 구성 요소에 컨텍스트 값을 제공하는 구성 요소입니다. 상태는 컨텍스트에서 관리 되어 하위로 내려줍니다.

StatusBar: 할 일 목록의 총 작업 수를 표시하고 작업 상태를 변경할 수 있는 칩을 제공하는 구성 요소입니다. 

TodoList: 전체 할일 목록 애플리케이션을 표시하는 주요 구성 요소입니다. 응용 프로그램의 제목과 TodoForm, StatusBar 및 Todos가 있는 헤더를 표시합니다. 

TodoForm: 사용자가 할 일 목록에 새 작업을 추가할 수 있게 해주는 구성 요소입니다.

Todo: 할 일 목록의 각 작업을 표시하는 구성 요소입니다. 작업 텍스트와 해당 상태를 표시합니다.

## 폴더 구조
```
src
 ┣ apis
 ┃ ┣ base
 ┃ ┃ ┣ addTodos.ts
 ┃ ┃ ┣ deleteTodos.ts
 ┃ ┃ ┣ editTodos.ts
 ┃ ┃ ┗ getTodos.ts
 ┃ ┗ instance
 ┃ ┃ ┗ index.ts
 ┣ constants
 ┃ ┗ url.ts
 ┣ container
 ┃ ┗ todolist
 ┃ ┃ ┣ components
 ┃ ┃ ┃ ┣ statusBar
 ┃ ┃ ┃ ┃ ┣ components
 ┃ ┃ ┃ ┃ ┃ ┗ Chip.tsx
 ┃ ┃ ┃ ┃ ┣ StatusBar.tsx
 ┃ ┃ ┃ ┃ ┗ index.ts
 ┃ ┃ ┃ ┣ Todo.tsx
 ┃ ┃ ┃ ┗ TodoForm.tsx
 ┃ ┃ ┣ contexts
 ┃ ┃ ┃ ┗ StatusContext.tsx
 ┃ ┃ ┣ util
 ┃ ┃ ┃ ┗ formatDate.ts
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
 ┃ ┗ usefetchTodos.ts
 ┣ App copy.tsx
 ┣ App.css
 ┣ App.test.tsx
 ┣ App.tsx
 ┣ index.css
 ┣ index.tsx
 ┣ react-app-env.d.ts
 ┣ reportWebVitals.ts
 ┗ setupTests.ts
 ```
## 구현 리스트

- 사용자는 문자열로 된 todo를 추가 할 수 있다.
- 작성일, 최종수정일, 내용, 참조하고 있는 todo들의 id가 표시되어야 한다.
- 사용자는 todo를 완료 또는 미완료로 상태변경을 할 수 있다.
- todo는 다른 todo들을 참조할 수 있다.
- 참조하고 있는 todo들이 모두 완료 상태가 아니라면 todo를 완료할 수 없다.
- 사용자는 todo 목록을 조회할 수 있다.
- 사용자는 todo를 수정할 수 있다.
- 사용자는 todo를 삭제할 수 있다.
- mock api를 구현하고 todo 앱이 해당 api를 통해서 작동하도록 구현.
- 작성일, 최종수정일, 내용, 참조하고 있는 todo들의 id가 표시되어야 한다.
- todo는 다른 todo들을 참조할수 있다.
- 참조하고 있는 todo들이 모두 완료 상태가 아니라면 todo를 완료할 수 없다.
### 미구현 리스트
- 무한 스크롤

