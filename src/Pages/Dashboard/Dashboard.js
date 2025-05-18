import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Chart from "../../Components/Chart/Chart";
import RecentTransactions from "../../Components/RecentTransactions/RecentTransactions";
import AllTransactions from "../../Components/AllTransactions/AllTransactions";
import { useAppContext } from "../../Context/AppContext";

const Dashboard = () => {
  const [allTransactions, setAllTransactions] = useState(false);
  const {
    totalData,
    incomeTransactions,
    expenseTransactions,
    investmentTransactions,
  } = useAppContext();

  const [clickedTab, setClickedTab] = useState("Income");

  const fullMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentSystemMonth = new Date().getMonth();
  const months = fullMonths.slice(0, currentSystemMonth + 1);

  const [currentMonthIndex, setCurrentMonthIndex] =
    useState(currentSystemMonth);
  const [currentMonth, setCurrentMonth] = useState(
    `${months[currentSystemMonth]} 25`
  );

  const handleRightClick = () => {
    setCurrentMonthIndex((prevIndex) => {
      const newIndex =
        prevIndex < months.length - 1 ? prevIndex + 1 : prevIndex;
      setCurrentMonth(`${months[newIndex]} 25`);
      return newIndex;
    });
  };

  const handleLeftClick = () => {
    setCurrentMonthIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : prevIndex;
      setCurrentMonth(`${months[newIndex]} 25`);
      return newIndex;
    });
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    const selectedMonth = selectedValue.split(" ")[0];
    const index = months.findIndex((month) => month === selectedMonth);
    setCurrentMonthIndex(index);
    setCurrentMonth(selectedValue);
  };

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="py-4 flex flex-col gap-4 w-full h-full relative md:px-40">
      <div className="flex items-center justify-between sticky top-0 bg-white z-10 py-4 w-full opacity-90 px-4 ">
        <Link to="/">
          <div className="w-8 h-8 border rounded-full flex items-center justify-center">
            <span className="bi bi-arrow-left mt-1"></span>
          </div>
        </Link>
        <div className="font-semibold text-xl">Dashboard</div>
      </div>
      <div className="w-full flex items-center justify-between text-2xl font-semibold px-4 ">
        <div
          className="bi bi-chevron-left cursor-pointer"
          onClick={handleLeftClick}
        ></div>

        <select
          value={currentMonth}
          onChange={handleSelectChange}
          className="text-center"
        >
          {months.map((month, index) => (
            <option key={index} className="text-sm">{`${month} 25`}</option>
          ))}
        </select>

        <div
          className="bi bi-chevron-right cursor-pointer"
          onClick={handleRightClick}
        ></div>
      </div>

      <div className="w-full flex items-center justify-between px-4">
        <div
          className={`w-1/3 rounded-l-md py-4 md:py-2 flex flex-col items-center justify-center border-2 border-black border-r-0 ${
            clickedTab == "Income" ? "bg-[#0171ff] text-white" : ""
          } cursor-pointer`}
          onClick={() => {
            setClickedTab("Income");
          }}
        >
          <div className="text-lg font-semibold">Income</div>
          <div className="text-sm">₹{totalData[0]}</div>
        </div>

        <div
          className={`w-1/3 py-4 md:py-2 flex flex-col items-center justify-center border-2 border-black border-x- ${
            clickedTab == "Investment" ? "bg-[#0171ff] text-white" : ""
          } cursor-pointer`}
          onClick={() => {
            setClickedTab("Investment");
          }}
        >
          <div className="text-lg font-semibold">Savings</div>
          <div className="text-sm">₹{totalData[1]}</div>
        </div>

        <div
          className={`w-1/3 py-4 md:py-2 flex flex-col items-center justify-center border-2 border-black border-l-0 rounded-r-md ${
            clickedTab == "Expense" ? "bg-[#0171ff] text-white" : ""
          } cursor-pointer`}
          onClick={() => {
            setClickedTab("Expense");
          }}
        >
          <div className="text-lg font-semibold">Expenses</div>
          <div className="text-sm">₹{totalData[2]}</div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="px-4 md:w-1/2">
          <Chart clickedTab={clickedTab} />
        </div>
        <div className="md:w-1/2 md:pr-4">
          <RecentTransactions
            ctrlHeight={!isMobile}
            setAllTransactions={setAllTransactions}
            renderList={
              clickedTab == "Income"
                ? incomeTransactions
                : clickedTab == "Investment"
                ? investmentTransactions
                : expenseTransactions
            }
            webLength={
              clickedTab == "Income"
                ? incomeTransactions.length
                : clickedTab == "Investment"
                ? investmentTransactions.length
                : expenseTransactions.length
            }
          />
        </div>
        {isMobile && allTransactions && (
          <AllTransactions
            setAllTransactions={setAllTransactions}
            ctrlPosition={true}
            renderList={
              clickedTab == "Income"
                ? incomeTransactions
                : clickedTab == "Investment"
                ? investmentTransactions
                : expenseTransactions
            }
          />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
