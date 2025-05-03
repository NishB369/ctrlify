import React from "react";
import PersonalDetail, { AgeField, IncomeField } from "./PersonalDetail";

const PersonalDetails = () => {
  return (
    <div className="mt-2 flex flex-col gap-4 px-4">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">Personal Details</div>
        <div className="text-sm underline">Edit</div>
      </div>
      <div className="flex flex-col items-start justify-center gap-4">
        <PersonalDetail field={"Full Name"} placeholder={"User Name"} />
        <PersonalDetail field={"Email"} placeholder={"User Email"} />
        <div className="w-full flex gap-8">
          <AgeField />
          <PersonalDetail field={"Designation"} placeholder={"Designation"} />
        </div>
        <IncomeField />
      </div>
    </div>
  );
};

export default PersonalDetails;
