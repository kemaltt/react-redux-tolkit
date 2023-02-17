import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTodo } from "../stores/todo-slice";
import { Button, Form, InputGroup, Table } from "react-bootstrap";

import TodoItem from "./TodoItem";

export default function TodoList() {
  const [input, setInput] = useState("");
  const { todos } = useSelector((state) => state.todos);
  const { dark } = useSelector((state) => state.thema);

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
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="add todos.."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
          />
          <Button
            type="submit"
            variant={dark ? "secondary" : "primary"}
            id="button-addon2"
          >
            Add Todo
          </Button>
        </InputGroup>
      </form>

      {todos.length > 0 ? (
        <Table
          striped
          bordered
          hover
          size="sm"
          variant={dark ? "" : "secondary"}
        >
          <thead>
            <tr>
              <th>#</th>
              <th colSpan={2}>Todos</th>
            </tr>
          </thead>
          {todos.map((todo, i) => (
            <TodoItem todo={todo} i={i} />
          ))}
        </Table>
      ) : null}
    </div>
  );
}
