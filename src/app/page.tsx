"use client";

import { useState, useEffect } from "react";
import useFetch from "./hooks/useFetch";

type Staff = {
  staff_pass_id: String;
  team_name: String;
  created_at: Date;
};

type StaffList = Staff[];

const TABLE_HEAD = ["Staff ID", "Team Name"];

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [displayNoResult, setDisplayNoResult] = useState<Boolean>(false);
  const [staffList, setStaffList] = useState<StaffList>([]);
  const [displayList, setDisplayList] = useState<StaffList>([]);
  const { fetchCSV } = useFetch();

  useEffect(() => {
    fetchCSV("/staff-id-to-team-mapping-long.csv", setStaffList);
  }, []);

  useEffect(() => {
    if (search === "") {
      setDisplayNoResult(false);
      setDisplayList([]);
      return;
    }
    const searchedList = staffList.filter((staff) => {
      return staff.staff_pass_id.toLowerCase().includes(search.toLowerCase());
    });
    if (searchedList.length === 0) {
      setDisplayNoResult(true);
      return;
    }
    setDisplayNoResult(false);
    setDisplayList(searchedList);
  }, [search]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center p-24">
      <div className="flex">
        <h1 className="font-serif mb-4 text-4xl leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white p-4">
          Redeem IT!
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-24 h-24 px-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
      </div>
      <div className="relative z-10 max-w-5xl w-full items-center font-mono text-sm lg:flex">
        <div className="absolute w-full inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search for Staff by ID"
          onChange={handleSearchChange}
        />
      </div>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex max-h-full">
        <div className="overflow-y-auto max-h-96 w-full">
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
            {!displayNoResult && (
              <tbody>
                {displayList.length != 0
                  ? displayList.map(({ staff_pass_id, team_name }, index) => {
                      const classes = "p-4";
                      return (
                        <tr key={index}>
                          <td className={classes}>{staff_pass_id}</td>
                          <td className={classes}>{team_name}</td>
                        </tr>
                      );
                    })
                  : staffList.map(({ staff_pass_id, team_name }, index) => {
                      const classes = "p-4";
                      return (
                        <tr key={index}>
                          <td className={classes}>{staff_pass_id}</td>
                          <td className={classes}>{team_name}</td>
                        </tr>
                      );
                    })}
              </tbody>
            )}
          </table>
        </div>
      </div>
      {displayNoResult && (
        <div className="p-4">
          <h1>No Results Found!</h1>
        </div>
      )}
    </main>
  );
}
