"use client";
import styles from "./SingleSelectDropdown.module.css";

export default function SingleSelectDropdown({
  id = "singleSelectDropdown",
  label = "",
  options = [{ label: "Select One", value: "" }],
  defaultSelected = "",
  onSelect = () => {},
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        className={styles.dropdown}
        name={id}
        id={id}
        defaultValue={defaultSelected}
        onChange={(e) => {
          onSelect(e);
        }}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
