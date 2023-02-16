import React from "react";
import Modal from "../components/Modal";
import TodoList from "../components/TodoList";
import { useSelector } from "react-redux";

export default function Todos() {
  const { open } = useSelector((state) => state.modal);
  console.log(open);
  return (
    <>
      <TodoList />

      {open && <Modal />}
    </>
  );
}
