import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  return (
    <div className="flex place-content-between my-10">
      <h1 className="ml-48 text-4xl font-extrabold text-transparent bg-clip-text font-bold bg-gradient-to-r from-green-400 to-blue-500">
        Decentralised Patreon
      </h1>
      <div className="mr-48">
        <ConnectButton />
      </div>
    </div>
  );
};

export default Header;
