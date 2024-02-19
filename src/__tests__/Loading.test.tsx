import { test } from "vitest";
import { render } from "@testing-library/react";
import Loading from "../app/_components/Loading";

test("Loading", () => {
  render(<Loading />);
});
