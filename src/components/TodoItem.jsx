import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../stores/todo-slice";
import { openModal } from "../stores/modal-slice";
import { Button, Table } from "react-bootstrap";

export default function TodoItem({ todo, i }) {
  const dispatch = useDispatch();

  console.log(todo);

  const delTodo = () => {
    dispatch(deleteTodo(todo.id));
  };
  const editHandle = () => {
    dispatch(
      openModal({
        data: todo,
      })
    );
  };

  return (
    <>
      <tbody key={i}>
        <tr>
          <td>{i + 1}</td>
          <td
            style={{
              width: "250px",
              textAlign: "left",
              textDecoration: todo.done ? "line-through" : "",
            }}
          >
            {" "}
            {todo.title}
          </td>
          <td>
            <Button onClick={delTodo} variant="danger" size="sm">
              Delete
            </Button>
            <Button onClick={editHandle} variant="warning" size="sm">
              Edit
            </Button>
          </td>
        </tr>
      </tbody>

      {/* <div
        className="todo-item"
        key={i}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",

            alignItems: "center",
          }}
        >
          <p> {i + 1}-</p>
          <p style={{ textDecoration: todo.done ? "line-through" : "" }}>
            {todo.title}
          </p>
        </div>

        <div className="buttons">
          <Button onClick={delTodo} variant="danger" size="sm">
            Delete
          </Button>
          <Button onClick={editHandle} variant="success" size="sm">
            Edit
          </Button>
        </div>
      </div> */}
    </>
  );
}
