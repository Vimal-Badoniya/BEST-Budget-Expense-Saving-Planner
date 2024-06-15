"use client";

import { messages } from "@/app/Constants/Messages/messages";
import Input from "@/app/Common/Components/Input/Input";
import SingleSelectDropdown from "@/app/Common/Components/SingleSelectDropdown/SingleSelectDropdown";
import { MONTH_LIST, YEAR_LIST } from "@/app/Constants/Constants/Constant";
import styles from "./CreateNewBudgetModal.module.css";
import { useState } from "react";
import Modal from "@/app/Common/Components/Modal/Modal";

export default function CreateNewBudgetModal() {
  const [budgetData, setBudgetData] = useState(null);
  function onMonthSelect(e) {
    console.log(e.target.value);
  }
  function onYearSelect(e) {
    console.log(e.target.value);
  }
  function validateUserInputs() {
    if (!budgetData) {
      return false;
    }
    if (budgetData?.name) {
      return true;
    }
  }
  function onCreateNewExpense() {
    const isInputValid = validateUserInputs();
    console.log(isInputValid);
  }

  function getModalContent() {
    return (
      <div>
        <div className="f-center">
          <Input
            id="budgetName"
            type="text"
            label={messages.budgetName}
            onValueChange={(e) => {
              console.log(e);
            }}
          />
          <SingleSelectDropdown
            id="budgetMonth"
            label={messages.applicableFor}
            options={MONTH_LIST}
            onSelect={onMonthSelect}
            defaultSelected={new Date().getMonth()}
          />
          <SingleSelectDropdown
            id="budgetYear"
            options={YEAR_LIST}
            onSelect={onYearSelect}
            defaultSelected={new Date().getFullYear()}
          />
        </div>
        <Input id="budgetAmount" type="number" label={messages.totalAmount} />
        <div className={styles.container}>
          <div
            className={`${styles.allotmentWrapper} ${styles.allocatedBgColor} f-center`}
          >
            <h4>{messages.allocatedForExpenses}</h4>
            <h4 className={styles.allocatedAmount}>
              {" "}
              {messages.rupeeText}2000
            </h4>
            <h4 className={styles.allocatedPercent}>32%</h4>
          </div>
          <div
            className={`f-center ${styles.allotmentWrapper} ${styles.unAllocatedBgColor}`}
          >
            <h4>{messages.unallocatedSavings}</h4>
            <h4 className={styles.allocatedAmount}>
              {" "}
              {messages.rupeeText}8000
            </h4>
            <h4 className={styles.unAllocatedPercent}>52%</h4>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Modal
      content={getModalContent()}
      showHeader
      showFooter
      headerTitle={messages.createNewBudget}
    />
  );
}
