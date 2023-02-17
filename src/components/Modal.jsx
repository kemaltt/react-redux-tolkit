import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../stores/modal-slice";
import { editTodo } from "../stores/todo-slice";
import { Button } from "react-bootstrap";

export default function Modal() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.modal);
  const [done, setDone] = useState(data.done);
  const [todo, setTodo] = useState(data.title);

  console.log(data);

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

  const close = () => {
    dispatch(closeModal());
  };
  return (
    <>
      <div className="modal-container">
        <div className="modal-inner">
          <form onSubmit={submitHandle} action="">
            <input
              type="text"
              placeholder={data.title}
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
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

            <div
              style={{ display: "flex", justifyContent: "space-between" }}
              className="buttons"
            >
              <Button type="submit" variant="warning">
                Edit
              </Button>
              <Button onClick={close} variant="secondary">
                Close
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
