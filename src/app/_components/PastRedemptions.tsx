"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import Loading from "./Loading";
import { RedemptionData } from "../_types/Redemption";

interface PastRedemptionsProps {
  redemptionList: RedemptionData[];
  setRedemptionList: Dispatch<SetStateAction<RedemptionData[]>>;
}

const TABLE_HEAD = ["Team Name", "Collected By", "Qty", "Date"];

const convertEpochToDate = (epoch: number) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(epoch);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return day.toString() + " " + month + " " + year.toString();
};

export default function PastRedemptions(props: PastRedemptionsProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchRedemptionData = async () => {
      const response = await fetch("/api/redemptions");
      const redemptionData = await response.json();
      props.setRedemptionList(redemptionData);
      setIsLoading(false);
    };
    fetchRedemptionData();
  }, []);

  return (
    <div className="flex-col w-full items-center text-center justify-center">
      <h1 className="text-3xl text-gray-900 md:text-3xl lg:text-4xl dark:text-white p-4">
        Past Redemptions
      </h1>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex max-h-full">
        <div className="overflow-y-auto max-h-96 w-full">
          {isLoading ? (
            <div className="mt-5">
              <Loading />
            </div>
          ) : (
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th key={head} className="border-b border-black p-4">
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {props.redemptionList.map(
                  ({ team_name, staff_pass_id, qty_redeemed, redeemed_at }) => {
                    const classes = "p-4";
                    const redeemedDate = convertEpochToDate(redeemed_at);
                    return (
                      <tr key={staff_pass_id}>
                        <td className={classes}>{team_name}</td>
                        <td className={classes}>{staff_pass_id}</td>
                        <td className={classes}>{qty_redeemed}</td>
                        <td className={classes}>{redeemedDate}</td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
