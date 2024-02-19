"use client";

import { useState } from "react";
import NewRedemption from "./NewRedemption";
import PastRedemptions from "./PastRedemptions";
import { RedemptionData, StaffMap } from "../_types/Redemption";

interface RedemptionsProps {
  staffMap: StaffMap;
}

export default function Redemptions(props: RedemptionsProps) {
  const [redemptionList, setRedemptionList] = useState<RedemptionData[]>([]);

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
        <PastRedemptions
          redemptionList={redemptionList}
          setRedemptionList={setRedemptionList}
        />
      </div>
    </div>
  );
}
