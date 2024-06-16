"use client";
import Button from "../Common/Components/Button/Button";
import CreateNewBudget from "./Components/CreateNewBudget/CreateNewBudget";
import { messages } from "../Constants/Messages/messages";
import Divider from "../Common/Components/Divider/Divider";
import CreateExpenseType from "./Components/CreateExpenseField/CreateExpenseType";
import { useSelector } from "react-redux";
import BudgetExpenseOverview from "./Components/BudgetExpenseOverview/BudgetExpenseOverview";
import ExpenseTypeList from "./Components/ExpenseTypeList/ExpenseTypeList";

export default function DashboardPage() {
  const store = useSelector(
    (state) => state?.addNewBudget?.data?.expense_types
  );

  return (
    <>
      <BudgetExpenseOverview />
      <CreateNewBudget />
      <Divider />
      <CreateExpenseType />
      <ExpenseTypeList />
      {/* <Button type="PRIMARY" label={messages.createNewBudget} /> */}
    </>
  );
}
