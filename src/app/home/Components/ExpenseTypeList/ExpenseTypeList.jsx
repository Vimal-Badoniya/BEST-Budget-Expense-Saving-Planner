"use client";
import { useSelector } from "react-redux";
import styles from "./ExpenseTypeList.module.css";
import Accordian from "@/app/Common/Components/Accordian/Accordian";
import Button from "@/app/Common/Components/Button/Button";

export default function ExpenseTypeList() {
  const expenseTypeData =
    useSelector((state) => state?.addNewBudget?.data?.expense_types) || [];
  console.log(expenseTypeData);
  return (
    <div>
      <ol>
        {expenseTypeData?.map((expenseType) => {
          return (
            <div key={expenseType?.id} className={styles.listItem}>
              <Accordian
                key={expenseType?.id}
                header={
                  <div>
                    <div>{expenseType?.name}</div>
                    <Button />
                  </div>
                }
                content={expenseType?.total_limit}
              />
            </div>
          );
        })}
      </ol>
    </div>
  );
}
