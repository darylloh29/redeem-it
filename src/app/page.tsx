import StaffTable from "./components/StaffTable";
import NewRedemption from "./components/NewRedemption";
import PastRedemptions from "./components/PastRedemptions";

export default function Home() {
  return (
    <main className="font-mono relative flex min-h-screen flex-col items-center p-24">
      <div className="flex max-w-7xl">
        <h1 className="font-serif mb-4 text-4xl text-gray-900 md:text-5xl lg:text-6xl dark:text-white p-4">
          Redeem IT!
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-24 h-24 px-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
      </div>
      <div className="w-full max-w-7xl">
        <StaffTable />
      </div>
      <div className="flex flex-row w-full max-w-7xl">
        <div className="basis-2/5 mr-2">
          <NewRedemption />
        </div>
        <div className="basis-3/5 ml-2">
          <PastRedemptions />
        </div>
      </div>
    </main>
  );
}
