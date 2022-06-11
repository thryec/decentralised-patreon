/* eslint-disable node/no-missing-import */
import { useState } from "react";
import StreamModal from "./StreamModal";
import TipModal from "./TipModal";

const CreatorInfo = () => {
  const [streamModal, setStreamModal] = useState<boolean>();
  const [tipModal, setTipModal] = useState<boolean>();

  return (
    <div className="border-2 rounded-lg border-slate-200 p-5">
      <div className="text-xl font-bold">Creator Address</div>
      <div className="flex space-x-2">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 py-2 px-4 rounded-lg text-white font-bold"
          onClick={() => setStreamModal(true)}
        >
          Stream ETH
        </button>
        <button
          className="bg-gradient-to-r from-pink-500 to-yellow-500  py-2 px-4 rounded-lg text-white font-bold"
          onClick={() => setTipModal(true)}
        >
          Tip ETH
        </button>
      </div>
      {streamModal && <StreamModal setStreamModal={setStreamModal} />}
      {tipModal && <TipModal setTipModal={setTipModal} />}
    </div>
  );
};

export default CreatorInfo;
