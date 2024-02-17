interface PastRedemptionsProps {
  redemptionList: RedemptionData[];
}
type RedemptionData = {
  team_name: string;
  staff_pass_id: string;
  redeemed_at: string;
};

const TABLE_HEAD = ["Team Name", "Collected By", "Collected At"];

const convertEpochToDate = (epoch: string) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(epoch);
  const day = date.getDay();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return day.toString() + " " + month + " " + year.toString();
};

export default function PastRedemptions(props: PastRedemptionsProps) {
  return (
    <div className="flex-col w-full items-center text-center justify-center">
      <h1 className="text-3xl text-gray-900 md:text-3xl lg:text-4xl dark:text-white p-4">
        Past Redemptions
      </h1>
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex max-h-full">
        <div className="overflow-y-auto max-h-96 w-full">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-black p-4">
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {props.redemptionList.map(
                ({ team_name, staff_pass_id, redeemed_at }, index) => {
                  const classes = "p-4";
                  const redeemedDate = convertEpochToDate(redeemed_at);
                  return (
                    <tr key={index}>
                      <td className={classes}>{team_name}</td>
                      <td className={classes}>{staff_pass_id}</td>
                      <td className={classes}>{redeemedDate}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
