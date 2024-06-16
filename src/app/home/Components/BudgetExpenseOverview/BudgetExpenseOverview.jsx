import { messages } from "@/app/Constants/Messages/messages";
import styles from "./BudgetExpenseOverview.module.css";
import AmountCard from "@/app/Common/Components/AmountCard/AmountCard";

export default function BudgetExpenseOverview() {
  return (
    <div className={styles.container}>
      <AmountCard
        type="INFO"
        amount="2000"
        percent="32"
        title={messages.allocatedForExpenses}
      />
      <AmountCard
        type="SUCCESS"
        amount="1969"
        percent="95"
        title={messages.unallocatedSavings}
      />
    </div>
  );
}
