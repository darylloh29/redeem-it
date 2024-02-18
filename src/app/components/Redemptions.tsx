"use client";

import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import NewRedemption from "./NewRedemption";
import PastRedemptions from "./PastRedemptions";

interface RedemptionsProps {
  staffMap: Map<string, string>;
}
type Staff = {
  staff_pass_id: string;
  team_name: string;
  created_at: string;
};
type RedemptionData = {
  team_name: string;
  staff_pass_id: string;
  redeemed_at: number;
};

export default function Redemptions(props: RedemptionsProps) {
  const [redemptionList, setRedemptionList] = useState<RedemptionData[]>([]);

  useEffect(() => {
    const fetchRedemptionData = async () => {
      const response = await fetch("/api/redemptions");
      const redemptionData = await response.json();
      setRedemptionList(redemptionData);
    };
    fetchRedemptionData();
  }, []);

  return (
    <div className="flex flex-row w-full">
      <div className="basis-2/5 mr-2">
        <NewRedemption
          staffMap={props.staffMap}
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
