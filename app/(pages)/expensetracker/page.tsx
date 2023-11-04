"use client";

import AddExpenseForm from "@/components/expensetracker/AddExpenseForm";
import DailySummaryCard from "@/components/expensetracker/DailySummaryCard";
import ExpenseModal from "@/components/expensetracker/ExpenseDialog";
import ExpenseModal2 from "@/components/expensetracker/ExpenseModal";
import SingleExpenseCard from "@/components/expensetracker/SingleExpenseCard";
import HabitCard from "@/components/home/habits";

export default function page() {
  return (
    <>
      <div className="z-10 ml-40 w-full max-w-7xl px-5 xl:px-0">
        <div className="flex flex-col">
          <div className="rounded text-white px-2 pb-2">
            <h1 className="my-2 text-center text-2xl font-bold">Oct 2023</h1>
            <div className="flex justify-between px-2">
              <p>Daily</p>
              <p>Calender</p>
              <p>Monthly</p>
              <p>Summary</p>
              <p>Description</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <p>Income</p>
              <p className="text-blue-400">₹ 76200</p>
            </div>
            <div>
              <p>Exp</p>
              <p className="text-red-400">₹ 76200</p>
            </div>
            <div>
              <p>Total</p>
              <p>₹ 76200</p>
            </div>
          </div>
          <hr />
          <div className="bg-transparent">
            <DailySummaryCard />
            <DailySummaryCard />
            <DailySummaryCard />
            <DailySummaryCard />
            <DailySummaryCard />
            <DailySummaryCard />
            <ExpenseModal />
          </div>
        </div>
      </div>
    </>
  );
}
