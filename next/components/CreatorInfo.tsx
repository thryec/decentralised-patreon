/* eslint-disable node/no-missing-import */
import { useState } from "react";
import StreamModal from "./StreamModal";

const CreatorInfo = () => {
  const [streamModal, setStreamModal] = useState<boolean>();

  return (
    <div className="border-2 rounded-lg border-slate-200 p-5">
      <div className="text-xl font-bold">Creator Address</div>
      <button
        className="bg-gradient-to-r from-pink-500 to-yellow-500  py-2 px-4 rounded-lg text-white font-bold"
        onClick={() => setStreamModal(true)}
      >
        Stream ETH
      </button>
      {streamModal && <StreamModal setStreamModal={setStreamModal} />}
    </div>
  );
};

export default CreatorInfo;
