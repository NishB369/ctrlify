import React from "react";
import PersonalDetail, { NumericField, IncomeField } from "./PersonalDetail";
import { useAppContext } from "../../Context/AppContext";

const PersonalDetails = ({ shimmer }) => {
  const { handleSignUp } = useAppContext();

  return (
    <div className="mt-2 flex flex-col gap-4 px-4">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">Personal Details</div>
        {!shimmer && <div className="text-sm underline">Edit</div>}
      </div>
      <div className="flex flex-col items-start justify-center gap-4">
        <PersonalDetail field={"Name"} placeholder={"John Doe"} />
        <PersonalDetail field={"Email"} placeholder={"johndoe@abc.com"} />
        <div className="w-full flex gap-4">
          <div className="w-1/4">
            <NumericField field={"Age"} placeholder={'25'} />
          </div>
          <div className="w-3/4">
            <PersonalDetail field={"Designation"} placeholder={"SDE"} />
          </div>
        </div>
        <NumericField field={"Current Balance"} placeholder={'10000'}/>
        <IncomeField />
      </div>
      <button
        type="submit"
        className="bg-[#0171ff] w-full py-3 rounded-md font-semibold text-white"
        onClick={handleSignUp}
      >
        Submit
      </button>
    </div>
  );
};

export default PersonalDetails;
