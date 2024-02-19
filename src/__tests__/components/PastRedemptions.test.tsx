import { test } from "vitest";
import { render } from "@testing-library/react";
import PastRedemptions from "../../app/_components/PastRedemptions";
import { RedemptionData } from "../../app/_types/Redemption";

test("PastRedemptions", () => {
  const redemptionList: RedemptionData[] = [
    {
      staff_pass_id: "ID 1",
      team_name: "Team 1",
      redeemed_at: 1708154345000,
      qty_redeemed: 1234,
    },
    {
      staff_pass_id: "ID 2",
      team_name: "Team 2",
      redeemed_at: 1708154545000,
      qty_redeemed: 1523,
    },
    {
      staff_pass_id: "ID 3",
      team_name: "Team 3",
      redeemed_at: 1708164345000,
      qty_redeemed: 12,
    },
  ];
  const setRedemptionList = () => {};
  render(
    <PastRedemptions
      redemptionList={redemptionList}
      setRedemptionList={setRedemptionList}
    />
  );
});
