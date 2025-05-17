import React, { useState } from "react";
import { useAppContext } from "../../Context/AppContext";

const MainCardBalance = () => {
  const [view, setView] = useState(false);

  const handleViewToggle = () => {
    setView(!view);
  };

  const { formData } = useAppContext();

  return (
    <div>
      <div className="w-full h-[175px] rounded-3xl rounded-b-4xl bg-[#0171ff] relative flex flex-col items-center justify-center text-white gap-2">
        <div className="text-sm mb-2">Your Available Balance</div>
        <div className="text-5xl" style={{ fontFamily: "agrandir-gheavy" }}>
          ₹
          <span className="ml-2">
            {view
              ? formData.CurrentBalance
              : "⁕".repeat(String(formData.CurrentBalance).length)}
          </span>
        </div>
        <div
          className="text-lg flex items-center justify-center gap-2"
          onClick={handleViewToggle}
        >
          <div className="font-semibold underline">
            {view ? "Hide" : "View"} Balance
          </div>
          <div className={`${view ? "bi bi-eye-slash" : "bi bi-eye"} cursor-pointer`}></div>
        </div>
      </div>
    </div>
  );
};

export default MainCardBalance;
