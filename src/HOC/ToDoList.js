import HOC from "./HOC";

function TodoList({ data }) {
  let renderTodos = data.slice(0, 10).map((todos) => {
    return <div key={todos.id}>{todos.title}</div>;
  });

  return <div>{renderTodos}</div>;
}

const SearchTodos = HOC(TodoList, "todos");
export default SearchTodos;
