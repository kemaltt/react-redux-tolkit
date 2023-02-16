import { configureStore } from "@reduxjs/toolkit";

import users from "./auth-slice";
import thema from "./thema";
import todos from "./todo-slice";
import modal from "./modal-slice";

const store = configureStore({
  reducer: {
    users,
    thema,
    todos,
    modal,
  },
});

export default store;
