import styles from "./Input.module.css";

export default function Input({ label = "", type = "text", id = "input" }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} />
    </div>
  );
}
