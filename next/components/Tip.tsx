/* eslint-disable node/no-missing-import */
import { useAccount } from "wagmi";
import { shortenAddress } from "../helpers";

const Tip = () => {
  const { data } = useAccount();

  return (
    <div>
      <h2>
        To:<code>creator address</code>
      </h2>
      <h2>
        From: <code>{shortenAddress(data?.address)}</code>
      </h2>
      <label htmlFor="amount">Amount to tip: </label>
      <input
        type="text"
        className="border border-slate-200 rounded-md"
        placeholder="ETH"
      />{" "}
      ETH
      <button className="px-4 py-2 bg-blue-500 rounded-md text-white font-bold block">
        Tip
      </button>
    </div>
  );
};

export default Tip;
