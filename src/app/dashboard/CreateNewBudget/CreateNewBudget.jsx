"use client";

import { messages } from "@/app/Constants/Messages/messages";
import Input from "@/app/Common/Components/Input/Input";
import SingleSelectDropdown from "@/app/Common/Components/SingleSelectDropdown/SingleSelectDropdown";
import { MONTH_LIST, YEAR_LIST } from "@/app/Constants/Constants/Constant";

export default function CreateNewBudget() {
  function onMonthSelect(e) {
    console.log(e.target.value);
  }
  function onYearSelect(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <Input id="budgetName" type="text" label={messages.budgetName} />
      <Input id="budgetAmount" type="number" label={messages.totalAmount} />
      <div>
        <h4>Allocated For Expenses : </h4>
        <h4>2000</h4>
        <h4>32%</h4>
      </div>
      <div>
        <h4> Unallocated/Savings: </h4>
        <h4>8000</h4>
        <h4>52%</h4>
      </div>
      <SingleSelectDropdown
        id="budgetMonth"
        label={messages.selectMonth}
        options={MONTH_LIST}
        onSelect={onMonthSelect}
        defaultSelected={new Date().getMonth()}
      />
      <SingleSelectDropdown
        id="budgetYear"
        label={messages.selectYear}
        options={YEAR_LIST}
        onSelect={onYearSelect}
        defaultSelected={new Date().getFullYear()}
      />
    </div>
  );
}
