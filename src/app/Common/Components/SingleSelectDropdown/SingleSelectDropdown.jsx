"use client";

export default function SingleSelectDropdown({
  id = "singleSelectDropdown",
  label = "Select One",
  options = [{ label: "Select One", value: "" }],
  defaultSelected = "",
  onSelect = () => {},
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
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
