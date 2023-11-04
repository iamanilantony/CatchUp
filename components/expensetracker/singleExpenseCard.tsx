import React, { useState } from "react";
import ExpenseModal from "./ExpenseModal";
import Modal from "@/components/shared/modal";
import AddExpenseForm from "./AddExpenseForm";
import { Button } from "../ui/Button";
import { PencilIcon } from "lucide-react";
import { BsPencilSquare } from "react-icons/bs";

type Props = {};

const SingleExpenseCard = (props: Props) => {
  const [showModal, setShowModal] = useState(false);

  const changeModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="flex justify-between p-2 hover:border-y cursor-pointer">
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <AddExpenseForm />
      </Modal>
      <span>socailLife</span>
      <div className="flex flex-col">
        <span>Trip Wayanad</span>
        <span className="text-xs text-gray-400">Bank Accounts</span>
      </div>
      <div className="flex items-center">
        <span className="text-red-400 mr-2">₹ 4610</span>
        {/* <PencilIcon className="text-xs" /> */}
        {/* <Button className="bg-blue-400 text-xs" onClick={changeModal}>
          Edit
        </Button> */}
        <BsPencilSquare className="cursor-pointer" onClick={changeModal} />
      </div>
    </div>
  );
};

export default SingleExpenseCard;
