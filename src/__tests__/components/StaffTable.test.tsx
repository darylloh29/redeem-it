import { test } from "vitest";
import { render } from "@testing-library/react";
import StaffTable from "../../app/_components/StaffTable";
import { Staff } from "../../app/_types/Staff";

test("StaffTable", () => {
  const staffList: Staff[] = [
    {
      staff_pass_id: "Staff ID 1",
      team_name: "Team 1",
      created_at: 1708154345000,
    },
    {
      staff_pass_id: "Staff ID 2",
      team_name: "Team 2",
      created_at: 1708154145000,
    },
    {
      staff_pass_id: "Staff ID 3",
      team_name: "Team 3",
      created_at: 1708184345000,
    },
  ];
  const setStaffList = () => {};
  render(<StaffTable staffList={staffList} setStaffList={setStaffList} />);
});
