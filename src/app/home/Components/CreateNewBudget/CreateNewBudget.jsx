"use client";

import Input from "@/app/Common/Components/Input/Input";
import SingleSelectDropdown from "@/app/Common/Components/SingleSelectDropdown/SingleSelectDropdown";
import { MONTH_LIST, YEAR_LIST } from "@/app/Constants/Constants/Constant";
import { messages } from "@/app/Constants/Messages/messages";
import { useState } from "react";
import Button from "@/app/Common/Components/Button/Button";
import { useDispatch } from "react-redux";
import { addNewBudget } from "../../../../redux/Slices/AddBudgetSlice";

export default function CreateNewBudget() {
  const [isBasicDetailsFilled, setIsBasicDetailsFilled] = useState(false);
  const dispatch = useDispatch();

  function budgetBasicDetailsSubmit(e) {
    e.preventDefault();
    // console.log(e);
    setIsBasicDetailsFilled(true);

    const payload = {
      name: e.target[0].value,
      month: e.target[1].value,
      year: e.target[2].value,
      total_amount: e.target[3].value,
    };
    dispatch(addNewBudget(payload));
  }

  return (
    <>
      <form onSubmit={budgetBasicDetailsSubmit}>
        <div className="f-center">
          <Input
            id="budgetName"
            type="text"
            label={messages.budgetName}
            isRequired
          />
          <SingleSelectDropdown
            id="budgetMonth"
            label={messages.applicableFor}
            options={MONTH_LIST}
            defaultSelected={new Date().getMonth()}
          />
          <SingleSelectDropdown
            id="budgetYear"
            options={YEAR_LIST}
            defaultSelected={new Date().getFullYear()}
          />
        </div>
        <div className="f-center">
          <Input
            id="budgetAmount"
            type="number"
            label={messages.totalAmount}
            isRequired
          />
          <Button
            type="submit"
            label={isBasicDetailsFilled ? "Update" : "Proceed"}
          />
        </div>
      </form>
    </>
  );
}
