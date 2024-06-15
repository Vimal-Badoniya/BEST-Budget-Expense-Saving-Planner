"use client";
import styles from "./Modal.module.css";
import Button from "../Button/Button";
import { messages } from "@/app/Constants/Messages/messages";

export default function Modal({
  content,
  showHeader = true,
  headerTitle = "",
  headericon = "",
  showFooter = true,
  onModalClose = () => {},
  onSubmit = () => {},
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        {showHeader && (
          <div className={`${styles.headerWrapper} f-center`}>
            <div>{headerTitle}</div>
            <Button
              type="INFO"
              label={messages.closeIcon}
              onClick={onModalClose}
            />
          </div>
        )}
        <div>{content}</div>
        {showFooter && (
          <div className="f-center">
            <Button
              type="DANGER"
              label={messages.closeText}
              onClick={onModalClose}
            />
            <Button
              type="PRIMARY"
              label={messages.createText}
              onClick={onSubmit}
            />
          </div>
        )}
      </div>
    </div>
  );
}
