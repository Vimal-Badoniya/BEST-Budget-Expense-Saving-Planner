const EXPENSE_SCHEMA = {
  uid: "e01",
  note: "Indore to Dewas",
  amount: 200,
  expense_date: "UTC Epoch",
};

const EXPENSE_TYPE_SCHEMA = {
  uid: "et01",
  name: "Fuel",
  total_limit: 1000,
  spent_amount: 600,
  remaining_amount: 500,
  expenses: [],
};

const BUDGET_SCHEMA = {
  name: "",
  uid: "b01",
  total_amount: 5000,
  total_spent: 1000,
  total_remaining: 4000,
  applicable_for: "MONTH", //"MONTH" "YEAR" "CUSTOM"
  duration_from: "UTC Epoch",
  duration_to: "UTC Epoch",
  month: 0,
  year: 2024,
  total_saving: 0,
  expense_types: [],
};
