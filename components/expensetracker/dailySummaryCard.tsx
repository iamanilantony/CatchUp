import React from "react";
import SingleExpenseCard from "@/components/expensetracker/SingleExpenseCard";

type Props = {};

const DailySummaryCard = (props: Props) => {
  return (
    <div className="my-4 bg-black text-white">
      <div className="my-4 ml-2 flex justify-between">
        <p className="font-bold mt-1">
          27{" "}
          <span className="rounded bg-gray-400 p-1 text-xs font-light">
            Fri
          </span>
        </p>
        <p className="text-blue-400">₹ 303030</p>
        <p className="text-red-400">₹ 303030</p>
      </div>
      <hr />
      <SingleExpenseCard />
      <SingleExpenseCard />
      <SingleExpenseCard />
      <SingleExpenseCard />
    </div>
  );
};

export default DailySummaryCard;
