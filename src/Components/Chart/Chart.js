import * as React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { useAppContext } from "../../Context/AppContext";

export default function Chart({ clickedTab }) {
  const margin = { left: 0, bottom: 0 };
  const label = clickedTab;

  const { incomeTransactions, investmentTransactions, expenseTransactions } =
    useAppContext();

  const daysInMonth = 30;
  const dailyAmounts = Array(daysInMonth).fill(null);

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
    dailyAmounts[day] += parseFloat(transaction.Amount);
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
