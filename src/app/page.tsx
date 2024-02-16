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
  const [search, setSearch] = useState<string>("");
  const [staffList, setStaffList] = useState<StaffList>([]);
  const [displayList, setDisplayList] = useState<StaffList>([]);
  const { fetchCSV } = useFetch();

  useEffect(() => {
    fetchCSV("/staff-id-to-team-mapping-long.csv", setStaffList);
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search for Staff"
          onChange={handleSearchChange}
        />
      </div>
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
            {displayList.length != 0
              ? displayList.map(({ staff_pass_id, team_name }, index) => {
                  const classes = "p-4";
                  return (
                    <tr key={index}>
                      <td className={classes}>{staff_pass_id}</td>
                      <td className={classes}>{team_name}</td>
                      <td className={classes}>Not Redeemed</td>
                    </tr>
                  );
                })
              : staffList.map(({ staff_pass_id, team_name }, index) => {
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
