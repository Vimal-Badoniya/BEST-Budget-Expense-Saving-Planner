"use client";
import Button from "@/app/Common/Components/Button/Button";
import Input from "@/app/Common/Components/Input/Input";
import { messages } from "@/app/Constants/Messages/messages";
import styles from "./CreateExpenseType.module.css";
import { useDispatch } from "react-redux";
import { addNewExpenseType } from "../../../../redux/Slices/AddBudgetSlice";

export default function CreateExpenseType() {
  const dispatch = useDispatch();

  function onAddExpenseType(e) {
    e.preventDefault();
    const payload = {
      name: e.target[0].value,
      total_limit: e.target[1].value,
    };
    dispatch(addNewExpenseType(payload));
  }
  return (
    <form onSubmit={onAddExpenseType} className={`${styles.expenseTypeForm} `}>
      <Input
        label={messages.expenseType}
        id="expenseType"
        placeHolder={messages.expenseTypePlaceholderText}
        isRequired
      />
      <Input
        type="number"
        label={messages.amountText}
        id="expenseTypeAmmount"
        isRequired
      />
      <Button label={messages.addTextWithSign} type="submit" />
    </form>
  );
}
