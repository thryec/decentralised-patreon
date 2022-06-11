/* eslint-disable node/no-missing-import */
import { useState } from "react";
import StreamModal from "./StreamModal";
import TipModal from "./TipModal";

const CreatorInfo = () => {
  const [streamModal, setStreamModal] = useState<boolean>();
  const [tipModal, setTipModal] = useState<boolean>();

  return (
    <div className="border-2 rounded-lg border-slate-400 w-1/2 ">
      <div>Creator Info</div>

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
        {tipModal && <TipModal setTipModal={setTipModal} />}
      </div>
    </div>
  );
};

export default CreatorInfo;
