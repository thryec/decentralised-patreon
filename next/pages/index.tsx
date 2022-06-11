/* eslint-disable node/no-missing-import */
import type { NextPage } from "next";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import CreatorInfo from "../components/CreatorInfo";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center h-screen bg-slate-200 font-Inter">
      <div>
        <div>
          <ConnectButton />
          <CreatorInfo />
        </div>
      </div>
    </div>
  );
};

export default Home;
