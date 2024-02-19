import { beforeAll, expect, expectTypeOf, test } from "vitest";
import { RedemptionData } from "../../app/_types/Redemption";

const BEFORE_ALL_TIMEOUT = 30000; // 30 sec
let get_response: Response;
let get_body: RedemptionData[];

let post_response: Response;
let post_body: string;

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

beforeAll(async () => {
  get_response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/redemptions"
  );
  get_body = await get_response.json();

  post_response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/redemptions",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(redemptionList),
    }
  );
  post_body = await post_response.json();
}, BEFORE_ALL_TIMEOUT);

test("GET: Should have response status 200", () => {
  expect(get_response.status).toBe(200);
});

test("GET: Should have content-type", () => {
  expect(get_response.headers.get("Content-Type")).toBe("application/json");
});

test("GET: Should have array in the body", () => {
  expectTypeOf(get_body).toBeArray();
});

test("POST: Should have response status 200", () => {
  expect(get_response.status).toBe(200);
});
