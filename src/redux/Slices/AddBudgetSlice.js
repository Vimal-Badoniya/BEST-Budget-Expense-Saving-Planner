import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addNewBudgetSlice = createSlice({
  name: "addNewBudgetSlice",
  initialState: {
    isLoading: false,
    data: {
      name: "",
      total_amount: 0,
      total_spent: 0,
      total_remaining: 0,
      applicable_for: "MONTH",
      duration_from: "UTC Epoch",
      duration_to: "UTC Epoch",
      month: 0,
      year: 2024,
      total_saving: 0,
      expense_types: [],
    },
  },
  reducers: {
    addNewBudget: (state, action) => {
      state.data = { ...state.data, ...action.payload, id: uuidv4() };
    },
    addNewExpenseType: (state, action) => {
      state.data.expense_types.push({ ...action.payload, id: uuidv4() });
    },
  },
});

export const { addNewBudget, addNewExpenseType } = addNewBudgetSlice.actions;
export default addNewBudgetSlice.reducer;
