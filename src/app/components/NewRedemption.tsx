"use client";

import { useState, Dispatch, SetStateAction } from "react";

interface NewRedemptionProps {
  staffList: Staff[];
  redemptionList: RedemptionData[];
  setRedemptionList: Dispatch<SetStateAction<RedemptionData[]>>;
}

type Staff = {
  staff_pass_id: string;
  team_name: string;
  created_at: string;
};
type RedemptionData = {
  team_name: string;
  staff_pass_id: string;
  redeemed_at: string;
};

export default function NewRedemption(props: NewRedemptionProps) {
  const staffList = props.staffList;
  const [staffID, setStaffID] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStaffID(event.target.value);
  };

  const handleRedeemClick = () => {
    console.log(staffList);
    console.log(staffID);
  };

  return (
    <div className="flex-col w-full items-center text-center justify-center">
      <h1 className="text-3xl text-gray-900 md:text-3xl lg:text-4xl dark:text-white p-4">
        New Redemption
      </h1>
      <form className="flex rounded p-4">
        <input
          className="shadow appearance-none border rounded w-full mr-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Staff ID"
          type="text"
          onChange={handleInputChange}
          placeholder="Enter Staff ID here"
        />
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white rounded focus:outline-none focus:shadow-outline py-2 px-4"
          type="button"
          onClick={handleRedeemClick}
        >
          Redeem
        </button>
      </form>
    </div>
  );
}
