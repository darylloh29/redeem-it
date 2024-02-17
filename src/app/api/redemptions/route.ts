import Papa from "papaparse";
import { promises as fs } from "fs";

type RedemptionData = {
  team_name: string;
  staff_pass_id: string;
  redeemed_at: number;
};

export async function GET() {
  const file = await fs.readFile(
    process.cwd() + "/db/team-to-redeemed-mapping.csv",
    "utf8"
  );
  const { data } = Papa.parse(file, {
    header: true,
    dynamicTyping: true,
  });
  return Response.json(data);
}

export async function POST(request: Request) {
  const data = (await request.json()) as RedemptionData[];
  const csvString = Papa.unparse(data);
  await fs.writeFile(
    process.cwd() + "/db/team-to-redeemed-mapping.csv",
    csvString
  );
  return Response.json("Success");
}
