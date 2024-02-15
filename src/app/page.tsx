"use client";

import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";

type Staff = {
  staff_pass_id: String;
  team_name: String;
  created_at: Date;
};

type StaffList = Staff[];

const TABLE_HEAD = ["Staff ID", "Team Name", "Status"];

export default function Home() {
  const [staffList, setStaffList] = useState<StaffList>([]);
  const { fetchCSV } = useFetch();

  useEffect(() => {
    fetchCSV("/staff-id-to-team-mapping-long.csv", setStaffList);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
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
            {staffList.map(({ staff_pass_id, team_name }, index) => {
              const classes = "p-4";
              return (
                <tr key={index}>
                  <td className={classes}>{staff_pass_id}</td>
                  <td className={classes}>{team_name}</td>
                  <td className={classes}>Not Redeemed</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
}
