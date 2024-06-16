"use client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import styles from "./Accordian.module.css";
import { useState } from "react";

export default function Accordian({ content, header }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <div>{header}</div>
        <div onClick={() => setIsOpen(!isOpen)} className="cp">
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </div>
      </div>
      {isOpen && <div className={styles.contentWrapper}>{content}</div>}
    </div>
  );
}
