import React, { useState, useEffect } from "react";
import { useAppContext } from "../../Context/AppContext";
import PersonalDetail, { NumericField, IncomeField } from "./PersonalDetail";

const PersonalDetails = () => {
  const { handleSignUp, setIsEdit, isEdit, isSignedUp, formData } =
    useAppContext();
  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleEditToggle = () => {
    setIsEdit(!isEdit);
  };

  const validationRules = {
    Name: {
      required: true,
    },
    Email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    },
    Age: {
      required: true,
      min: 18,
      max: 100,
    },
    Designation: {
      required: true,
    },
    CurrentBalance: {
      required: true,
      min: 1000,
    },
    Income: {
      required: true,
    },
  };

  const validateForm = () => {
    const errors = {};
    let valid = true;

    if (!formData.Name) {
      errors.Name = "Name is required";
      valid = false;
    }

    if (!formData.Email) {
      errors.Email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.Email)) {
      errors.Email = "Please enter a valid email address";
      valid = false;
    }

    if (!formData.Age) {
      errors.Age = "Age is required";
      valid = false;
    } else if (Number(formData.Age) < 18) {
      errors.Age = "Age must be at least 18";
      valid = false;
    } else if (Number(formData.Age) > 100) {
      errors.Age = "Age must be at most 100";
      valid = false;
    }

    if (!formData.Designation) {
      errors.Designation = "Designation is required";
      valid = false;
    }

    if (!formData.CurrentBalance) {
      errors.CurrentBalance = "Current Balance is required";
      valid = false;
    } else if (Number(formData.CurrentBalance) < 1000) {
      errors.CurrentBalance = "Current Balance must be at least ₹1,000";
      valid = false;
    }

    if (!formData.Income) {
      errors.Income = "Income is required";
      valid = false;
    }

    setFormErrors(errors);
    setIsFormValid(valid);
    return valid;
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleSubmit = () => {
    const isValid = validateForm();
    if (isValid) {
      handleSignUp();
    }
  };

  return (
    <div className="mt-2 flex flex-col gap-4 px-4 md:pb-10">
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">Personal Details</div>
        {isSignedUp && (
          <div
            className="text-sm underline cursor-pointer"
            onClick={handleEditToggle}
          >
            {isEdit ? "Edit" : "Save"}
          </div>
        )}
      </div>
      <div className="flex flex-col items-start justify-center gap-4">
        <PersonalDetail
          field="Name"
          placeholder="John Doe"
          validationRules={validationRules.Name}
        />
        <PersonalDetail
          field="Email"
          placeholder="johndoe@abc.com"
          validationRules={validationRules.Email}
        />
        <div className="w-full flex gap-4">
          <div className="w-1/4">
            <NumericField
              field="Age"
              placeholder="25"
              validationRules={validationRules.Age}
            />
          </div>
          <div className="w-3/4">
            <PersonalDetail
              field="Designation"
              placeholder="SDE"
              validationRules={validationRules.Designation}
            />
          </div>
        </div>
        <NumericField
          field="CurrentBalance"
          placeholder="10000"
          validationRules={validationRules.CurrentBalance}
        />
        <IncomeField validationRules={validationRules.Income} />
      </div>
      <button
        type="submit"
        className={`w-full py-3 rounded-md font-semibold text-white cursor-pointer ${
          isFormValid ? "bg-[#0171ff]" : "bg-gray-400"
        }`}
        onClick={handleSubmit}
        disabled={!isFormValid}
      >
        Submit
      </button>
    </div>
  );
};

export default PersonalDetails;
