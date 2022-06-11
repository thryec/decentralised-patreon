/* eslint-disable node/no-missing-import */
import type { NextPage } from "next";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import CreatorInfo from "../components/CreatorInfo";
import { useState } from "react";
import StreamModal from "../components/StreamModal";
import TipModal from "../components/TipModal";

const Home: NextPage = () => {
  const [streamModal, setStreamModal] = useState<boolean>();
  const [tipModal, setTipModal] = useState<boolean>();

  return (
    <div className="flex justify-center h-screen bg-slate-200 font-Inter">
      <div>
        <div>
          <ConnectButton />
          <CreatorInfo />
        </div>
        <div>
          <button className="bg-blue-100" onClick={() => setStreamModal(true)}>
            Stream Modal
          </button>
          {streamModal && <StreamModal setStreamModal={setStreamModal} />}
        </div>
        <div>
          <button className="bg-blue-100" onClick={() => setTipModal(true)}>
            Tip Modal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
