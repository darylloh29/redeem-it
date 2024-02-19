import { beforeAll, expect, expectTypeOf, test } from "vitest";
import { Staff } from "../../app/_types/Staff";

const BEFORE_ALL_TIMEOUT = 30000; // 30 sec
let response: Response;
let body: Staff[];

beforeAll(async () => {
  response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/staff");
  body = await response.json();
}, BEFORE_ALL_TIMEOUT);

test("GET: Should have response status 200", () => {
  expect(response.status).toBe(200);
});

test("GET: Should have content-type", () => {
  expect(response.headers.get("Content-Type")).toBe("application/json");
});

test("GET: Should have array in the body", () => {
  expectTypeOf(body).toBeArray();
});
