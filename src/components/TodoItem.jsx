import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../stores/todo-slice";
import { openModal } from "../stores/modal-slice";

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
      <div
        className="todo-item"
        key={i}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p> {i + 1}-</p>
        <p style={{ textDecoration: todo.done ? "line-through" : "" }}>
          {todo.title}
        </p>

        <div className="buttons">
          <button onClick={delTodo}>delete</button>
          <button onClick={editHandle}>Edit</button>
        </div>
      </div>
    </>
  );
}
