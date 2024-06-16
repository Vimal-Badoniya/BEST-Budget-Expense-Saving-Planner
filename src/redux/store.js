import { configureStore } from "@reduxjs/toolkit";
import addNewBudgetReducer from "./Slices/AddBudgetSlice";

export const makeStore = () => {
  return configureStore({
    reducer: { addNewBudget: addNewBudgetReducer },
  });
};
