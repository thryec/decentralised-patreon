/* eslint-disable node/no-missing-import */
import { useAccount } from "wagmi";
import { shortenAddress } from "../helpers";

const Subscribe = () => {
  const { data } = useAccount();

  return (
    <div>
      <h2>To: creator address</h2>
      <h2>
        From: <code>{shortenAddress(data?.address)}</code>
      </h2>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="text"
          className="border border-slate-200 rounded-md"
          placeholder="0.00"
        />{" "}
        ETH
      </div>
      <div>
        <label htmlFor="frequency">Duration:</label>
        <input
          type="text"
          className="border border-slate-200 rounded-md"
          placeholder="0"
        />{" "}
        Days
      </div>
      <button className="px-4 py-2 bg-blue-500 rounded-md text-white font-bold block">
        Tip
      </button>
    </div>
  );
};

export default Subscribe;
