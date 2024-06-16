import { messages } from "@/app/Constants/Messages/messages";
import styles from "./AmountCard.module.css";

//type = "INFO" / "SUCCESS" / "DANGER"
const typeClassMapping = {
  INFO: "info",
  SUCCESS: "success",
  DANGER: "danger",
};
const percentBgMapping = {
  INFO: "percentInfo",
  DANGER: "percentDanger",
  SUCCESS: "percentSuccess",
};
export default function AmountCard({ type = "INFO", title, amount, percent }) {
  return (
    <div
      className={`${styles.allotmentWrapper} ${
        styles[typeClassMapping[type]]
      } f-center`}
    >
      <h4>{title}</h4>
      <h4 className={styles.amount}>
        {messages.rupeeText}
        {amount}
      </h4>
      <h4 className={`${styles[percentBgMapping[type]]} ${styles.percent}`}>
        {percent}%
      </h4>
    </div>
  );
}
