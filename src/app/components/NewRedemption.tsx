"use client";

import { useState, Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface NewRedemptionProps {
  staffMap: Map<StaffPassID, TeamName>;
  redemptionList: RedemptionData[];
  setRedemptionList: Dispatch<SetStateAction<RedemptionData[]>>;
}

type StaffPassID = string;
type TeamName = string;
type Staff = {
  staff_pass_id: StaffPassID;
  team_name: TeamName;
  created_at: string;
};
type RedemptionData = {
  team_name: string;
  staff_pass_id: string;
  redeemed_at: number;
};

export default function NewRedemption(props: NewRedemptionProps) {
  const [staffID, setStaffID] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStaffID(event.target.value);
  };

  const handleSubmit = async () => {
    if (staffID.length < 1) {
      return toast("Staff ID cannot be empty!", {
        type: "error",
      });
    }

    const staffMap = props.staffMap;
    if (!staffMap.has(staffID)) {
      return toast("Invalid Staff ID!", {
        type: "error",
      });
    }

    const teamName = staffMap.get(staffID);

    if (!teamName) {
      return toast("No assigned team!", {
        type: "error",
      });
    }

    const redemptionList = props.redemptionList.slice();
    const redeemed = redemptionList.find((e) => e.team_name == teamName);

    if (redeemed) {
      return toast("Team " + teamName + " has already redeemed!", {
        type: "error",
      });
    }

    let numToRedeem = 0;
    staffMap.forEach((value, key, map) => {
      if (value == teamName) numToRedeem += 1;
    });

    const newRedemption: RedemptionData = {
      team_name: teamName!.toUpperCase(),
      staff_pass_id: staffID,
      redeemed_at: new Date().getTime(),
    };
    redemptionList.push(newRedemption);
    props.setRedemptionList(redemptionList);

    const res = await fetch("/api/redemptions", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(redemptionList),
    });
    await res.json();

    return toast(
      "Successfully redeemed " +
        numToRedeem.toString() +
        " gift(s) for " +
        teamName +
        " !",
      {
        type: "success",
      }
    );
  };

  return (
    <div className="flex-col w-full items-center text-center justify-center">
      <h1 className="text-3xl text-gray-900 md:text-3xl lg:text-4xl dark:text-white p-4">
        New Redemption
      </h1>
      <form
        className="flex rounded p-4"
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}
      >
        <input
          className="shadow appearance-none border rounded w-full mr-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="Staff ID"
          type="text"
          onChange={handleInputChange}
          placeholder="Enter Staff ID here"
          autoComplete="off"
        />
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white rounded focus:outline-none focus:shadow-outline py-2 px-4"
          type="submit"
        >
          Redeem
        </button>
      </form>
    </div>
  );
}
