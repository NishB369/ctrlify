import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { useAppContext } from "../../Context/AppContext";

export default function Chart({ clickedTab }) {
  const margin = { left: 0, bottom: 0 };
  const label = clickedTab;

  const { incomeTransactions, investmentTransactions, expenseTransactions } =
    useAppContext();

  const daysInMonth = 30;
  // Initialize dailyAmounts with null
  const dailyAmounts = Array(daysInMonth).fill(null);
  
  // Get current date to determine which days should be 0 vs null
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  
  // Set past days with no transactions to 0, leave future days as null
  for (let i = 0; i < daysInMonth; i++) {
    if (i < currentDay) {
      dailyAmounts[i] = 0;
    }
  }

  let clickedTabTransactions;

  switch (clickedTab) {
    case "Income":
      clickedTabTransactions = incomeTransactions;
      break;

    case "Investment":
      clickedTabTransactions = investmentTransactions;
      break;

    case "Expense":
      clickedTabTransactions = expenseTransactions;
      break;

    default:
      clickedTabTransactions = incomeTransactions;
      break;
  }

  clickedTabTransactions.forEach((transaction) => {
    const transactionDate = new Date(transaction.Date);
    const day = transactionDate.getDate() - 1;
    
    // Make sure the day index is valid
    if (day >= 0 && day < daysInMonth) {
      // If this is the first transaction for this day, initialize to 0 first
      if (dailyAmounts[day] === null) {
        dailyAmounts[day] = 0;
      }
      dailyAmounts[day] += parseFloat(transaction.Amount);
    }
  });

  const xAxisData = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="w-full border-2 border-black rounded-md flex items-center justify-center text-white py-2">
      <LineChart
        xAxis={[
          {
            data: xAxisData,
          },
        ]}
        series={[
          {
            label: label,
            data: dailyAmounts,
            area: true,
            color: "#0171ff",
          },
        ]}
        height={300}
        margin={margin}
        grid={{ vertical: true, horizontal: true }}
        yAxis={[
          {
            colorMap: {
              type: "piecewise",
              thresholds: [0, Math.max(...dailyAmounts, 10)],
              colors: ["white", "#0171ff"],
            },
          },
        ]}
      />
    </div>
  );
}
