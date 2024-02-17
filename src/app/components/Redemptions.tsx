"use client";

import { useState, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import NewRedemption from "./NewRedemption";
import PastRedemptions from "./PastRedemptions";

interface RedemptionsProps {
  staffList: Staff[];
}

type Staff = {
  staff_pass_id: string;
  team_name: string;
  created_at: string;
};
type RedemptionData = {
  team_name: string;
  staff_pass_id: string;
  redeemed_at: string;
};

export default function Redemptions(props: RedemptionsProps) {
  const [redemptionList, setRedemptionList] = useState<RedemptionData[]>([]);

  const { fetchCSV } = useFetch();
  useMemo(
    () => fetchCSV("/team-to-redeemed-mapping.csv", setRedemptionList),
    [redemptionList]
  );

  return (
    <div className="flex flex-row w-full">
      <div className="basis-2/5 mr-2">
        <NewRedemption
          staffList={props.staffList}
          redemptionList={redemptionList}
          setRedemptionList={setRedemptionList}
        />
      </div>
      <div className="basis-3/5 ml-2">
        <PastRedemptions redemptionList={redemptionList} />
      </div>
    </div>
  );
}
