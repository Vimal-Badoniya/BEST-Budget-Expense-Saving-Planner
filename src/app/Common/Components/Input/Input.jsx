import styles from "./Input.module.css";

export default function Input({
  label = "",
  type = "text",
  id = "input",
  bordered = false,
  onValueChange = () => {},
  placeHolder = "",
  isRequired = false,
}) {
  return (
    <div className={`${styles.wrapper} ${bordered && "border-black"}`}>
      <label htmlFor={id}>{label}</label>
      <input
        placeholder={placeHolder}
        id={id}
        name={id}
        type={type}
        className={styles.input}
        min={0}
        required={isRequired}
        onChange={(e) => {
          onValueChange(e);
        }}
      />
    </div>
  );
}
