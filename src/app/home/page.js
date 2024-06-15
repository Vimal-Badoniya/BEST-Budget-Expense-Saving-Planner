"use client";
import { useState } from "react";
import Button from "../Common/Components/Button/Button";
import CreateNewBudget from "./Components/CreateNewBudget/CreateNewBudget";
import { messages } from "../Constants/Messages/messages";

export default function DashboardPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  return (
    <>
      <CreateNewBudget />
      <Button
        type="PRIMARY"
        label={messages.createNewBudget}
        onClick={() => {
          setShowCreateModal(true);
        }}
      />
    </>
  );
}
