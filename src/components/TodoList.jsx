import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../stores/todo-slice";

import TodoItem from "./TodoItem";

export default function TodoList() {
  const [input, setInput] = useState("");
  const { todos } = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const handleTodos = (e) => {
    e.preventDefault();

    if (!input) {
      alert("Please enter todo");
    } else {
      dispatch(
        addTodo({
          title: input,
          id: uuidv4(),
          done: false,
        })
      );
      setInput("");
    }
  };

  console.log(input);
  return (
    <div className="todo-list">
      <form onSubmit={handleTodos} action="">
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="add todos.."
        />
        <button type="submit">Add Todo</button>
      </form>

      {todos.map((todo, i) => (
        <TodoItem todo={todo} i={i} />
      ))}
    </div>
  );
}
