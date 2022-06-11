import type { NextPage } from "next";
import ConnectWallet from "../components/ConnectWallet";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center h-screen bg-slate-100 text-white font-Inter">
      <div>
        <h1> decentralised patreon </h1>
        <ConnectWallet />
      </div>
    </div>
  );
};

export default Home;
