import React from "react";

const QuickActionBtn = ({ icon, type, clickState }) => {
  const handleClick = () => {
    clickState(true);
  };
  return (
    <div className=" flex flex-col gap-2 items-center">
      <div className="bg-[#0171ff] rounded-full w-fit p-3" onClick={handleClick}>
        <div
          className={`${icon} text-2xl text-white flex items-center justify-center`}
        ></div>
      </div>
      <div className="font-semibold whitespace-pre-line text-center leading-tight">
        {type.replace(" ", "\n")}
      </div>
    </div>
  );
};

export default QuickActionBtn;
