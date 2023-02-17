import React, { useState } from "react";
// import Modal from "../components/Modal";
import TodoList from "../components/TodoList";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../stores/modal-slice";

import { editTodo } from "../stores/todo-slice";
import { Button, Modal } from "react-bootstrap";

export default function Todos() {
  const { open } = useSelector((state) => state.modal);
  const { data } = useSelector((state) => state.modal);
  const [done, setDone] = useState(data.done);
  const [todo, setTodo] = useState(data.title);
  const dispatch = useDispatch();
  console.log(open);
  const handleClose = () => dispatch(closeModal());
  const submitHandle = (e) => {
    e.preventDefault();

    dispatch(
      editTodo({
        id: data.id,
        title: todo,
        done,
      })
    );

    setTodo("");
    dispatch(closeModal());
  };
  return (
    <>
      <TodoList />

      {open && (
        <Modal show={open} onHide={handleClose}>
          <form onSubmit={submitHandle} action="">
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                type="text"
                placeholder={data.title}
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                style={{ width: "100%" }}
              />

              <br />
              <label htmlFor="">
                <input
                  type="checkbox"
                  checked={done}
                  onChange={(e) => setDone(e.target.checked)}
                />
                Done
              </label>
              <br />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="warning">
                Edit
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      )}
    </>
  );
}
