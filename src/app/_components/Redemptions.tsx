"use client";

import { useState } from "react";
import NewRedemption from "./NewRedemption";
import PastRedemptions from "./PastRedemptions";
import { RedemptionData } from "../_types/Redemption";
import { StaffMap } from "../_types/Staff";

interface RedemptionsProps {
  staffMap: StaffMap;
}

export default function Redemptions(props: RedemptionsProps) {
  const [redemptionList, setRedemptionList] = useState<RedemptionData[]>([]);

  return (
    <div className="flex w-full flex-col lg:flex-row p-4">
      <div className="lg:basis-2/5 my-2 lg:mr-2 lg:my-0">
        <NewRedemption
          staffMap={props.staffMap}
          redemptionList={redemptionList}
          setRedemptionList={setRedemptionList}
        />
      </div>
      <div className="lg:basis-3/5 my-2 lg:ml-2 lg:my-0">
        <PastRedemptions
          redemptionList={redemptionList}
          setRedemptionList={setRedemptionList}
        />
      </div>
    </div>
  );
}
