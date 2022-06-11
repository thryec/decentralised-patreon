/* eslint-disable node/no-missing-import */
import type { NextPage } from "next";

import CreatorInfo from "../components/CreatorInfo";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center h-screen">
      <div>
        <div>
          <CreatorInfo />
        </div>
      </div>
    </div>
  );
};

export default Home;
