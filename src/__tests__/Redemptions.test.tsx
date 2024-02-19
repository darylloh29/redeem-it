import { test } from "vitest";
import { render } from "@testing-library/react";
import Redemptions from "../app/_components/Redemptions";
import { StaffMap } from "../app/_types/Staff";

test("Redemptions", () => {
  const staffMap: StaffMap = new Map([
    ["Staff ID 1", "Team 1"],
    ["Staff ID 2", "Team 2"],
    ["Staff ID 3", "Team 3"],
  ]);
  render(<Redemptions staffMap={staffMap} />);
});
