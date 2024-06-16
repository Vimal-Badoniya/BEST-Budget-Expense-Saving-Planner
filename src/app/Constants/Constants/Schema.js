const DEFAULT_EXPENSE_SCHEMA = {
  uid: "e01",
  note: "Indore to Dewas",
  amount: 0,
  expense_date: "UTC Epoch",
  expense_field: "id of expense field",
  budget_id: "id of budget",
};

const DEFAULT_EXPENSE_TYPE_SCHEMA = {
  uid: "et01",
  name: "", //FUEL / RENT / BILL / UTILITY
  total_limit: 0,
  spent_amount: 0,
  remaining_amount: 0,
  expenses: [DEFAULT_EXPENSE_SCHEMA],
};

const DEFAULT_BUDGET_SCHEMA = {
  uid: "b01",
  name: "",
  total_amount: 0,
  total_spent: 0,
  total_remaining: 0,
  applicable_for: "MONTH", //"MONTH" "YEAR" "CUSTOM"
  duration_from: "UTC Epoch",
  duration_to: "UTC Epoch",
  month: 0,
  year: 2024,
  total_saving: 0,
  expense_types: [DEFAULT_EXPENSE_TYPE_SCHEMA],
};
