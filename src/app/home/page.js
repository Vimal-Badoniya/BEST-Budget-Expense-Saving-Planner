"use client";
import { useState } from "react";
import Button from "../Common/Components/Button/Button";
import { messages } from "../Constants/Messages/messages";
import CreateNewBudgetModal from "./Modal/CreateNewBudgetModal";

export default function DashboardPage() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  return (
    <>
      <Button
        type="PRIMARY"
        label={messages.createNewBudget}
        onClick={() => {
          setShowCreateModal(true);
        }}
      />
      {showCreateModal && (
        <CreateNewBudgetModal setShowCreateModal={setShowCreateModal} />
      )}
    </>
  );
}
