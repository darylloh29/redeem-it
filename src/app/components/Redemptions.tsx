import NewRedemption from "./NewRedemption";
import PastRedemptions from "./PastRedemptions";

export default function Redemptions() {
  return (
    <div className="flex flex-row w-full">
      <div className="basis-2/5 mr-2">
        <NewRedemption />
      </div>
      <div className="basis-3/5 ml-2">
        <PastRedemptions />
      </div>
    </div>
  );
}
