import Papa from "papaparse";
import { promises as fs } from "fs";

export async function GET() {
  const file = await fs.readFile(
    process.cwd() + "/db/staff-id-to-team-mapping-long.csv",
    "utf8"
  );
  const { data } = Papa.parse(file, {
    header: true,
    dynamicTyping: true,
  });
  return Response.json(data);
}
