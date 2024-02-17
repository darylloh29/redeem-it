"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";

interface StaffTableProps {
  staffList: Staff[];
}
type Staff = {
  staff_pass_id: string;
  team_name: string;
  created_at: string;
};

const TABLE_HEAD = ["Staff ID", "Team Name"];

export default function StaffTable(props: StaffTableProps) {
  const [search, setSearch] = useState<string>("");
  const [displayNoResult, setDisplayNoResult] = useState<Boolean>(false);
  const [displayList, setDisplayList] = useState<Staff[]>([]);
  const staffList = props.staffList;

  useEffect(() => {
    if (search === "") {
      setDisplayNoResult(false);
      setDisplayList([]);
      return;
    }
    const searchedList = props.staffList.filter((staff) => {
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
    <div className="flex flex-col items-center">
      <div className="relative z-10 w-full items-center text-sm lg:flex">
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
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex max-h-full">
        <div className="overflow-y-auto h-96 w-full">
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
                  ? displayList.map(({ staff_pass_id, team_name }) => {
                      const classes = "p-4";
                      return (
                        <tr key={staff_pass_id}>
                          <td className={classes}>{staff_pass_id}</td>
                          <td className={classes}>{team_name}</td>
                        </tr>
                      );
                    })
                  : staffList.map(({ staff_pass_id, team_name }) => {
                      const classes = "p-4";
                      return (
                        <tr key={staff_pass_id}>
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
        <div className="flex p-4">
          <h1>No Results Found!</h1>
        </div>
      )}
    </div>
  );
}
