import React, { Component } from "react";
import TodoList from "./components/TodoList";
import UsersList from "./components/UsersList";
import HOCSearchUsers from "./HOC/UserList";
import HOCTodoList from "./HOC/ToDoList";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/nomalway">
          <h1>HOC Way</h1>
        </Link>
        <div className="section">
          <Routes>
            <Route path="/" element={[<UsersList />, <TodoList />]} />
            <Route
              path="/nomalway"
              element={[
                <h1>React HOC</h1>,
                <HOCSearchUsers />,
                <HOCTodoList />,
              ]}
            />
          </Routes>
        </div>
      </Router>
    );
  }
}
