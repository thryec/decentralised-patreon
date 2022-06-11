import type { NextPage } from "next";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center h-screen bg-slate-100 font-Inter">
      <div>
        <h1> decentralised patreon </h1>
        <ConnectButton />
      </div>
    </div>
  );
};

export default Home;
