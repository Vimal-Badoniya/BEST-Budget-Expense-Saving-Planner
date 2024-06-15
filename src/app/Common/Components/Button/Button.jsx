"use client";
import styles from "./Button.module.css";

//type = PRIMARY / DANGER / INFO
export default function Button({
  type = "PRIMARY",
  label = "Click",
  isDisabled = false,
  onClick = () => {},
}) {
  return (
    <button
      disabled={isDisabled}
      className={`${type === "PRIMARY" && styles.primaryButton}
      ${type === "DANGER" && styles.dangerButton} 
      ${type === "INFO" && styles.infoButton} 
      ${isDisabled && styles.disabledButton}
      ${styles.button}`}
      onClick={(e) => {
        onClick(e);
      }}
    >
      {label}
    </button>
  );
}
