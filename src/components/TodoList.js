import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const json = await res.json();
      console.log(json);
      setTodos(json);
    };
    fetchTodos();
  }, []);

  let filteredTodos = todos
    .slice(0, 10)
    .filter(({ title }) => {
      return title.indexOf(term) >= 0;
    })
    .map((todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });

  return (
    <div>
      <h2>Todos</h2>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <div>{filteredTodos}</div>
    </div>
  );
};

export default TodoList;
