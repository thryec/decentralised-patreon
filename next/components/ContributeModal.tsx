import { useState } from "react";

interface ContributeModalProps {
  setContributeModal: (a: boolean) => void;
}

const ContributeModal = (props: ContributeModalProps) => {
  const [recurring, setRecurring] = useState<boolean>();

  return (
    <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
      <div
        className="absolute bg-black opacity-50 inset-0 z-0"
        onClick={() => props.setContributeModal(false)}
      />
      <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
        <h1 className="font-bold text-xl">Contribute</h1>
        <div className="flex place-content-center space-x-8">
          {recurring ? (
            <button
              className="border-2 border-slate-100 rounded-md px-4 py-2 font-bold"
              onClick={() => setRecurring(false)}
            >
              Tip
            </button>
          ) : (
            <button
              className="border-2 border-white  bg-slate-100 rounded-md px-4 py-2 font-bold"
              onClick={() => setRecurring(false)}
            >
              Tip
            </button>
          )}
          {recurring ? (
            <button
              className="border-2 border-white  bg-slate-100 rounded-md px-4 py-2 font-bold"
              onClick={() => setRecurring(true)}
            >
              Subscribe
            </button>
          ) : (
            <button
              className="border-2 border-slate-100 rounded-md px-4 py-2 font-bold"
              onClick={() => setRecurring(true)}
            >
              Subscribe
            </button>
          )}
        </div>
        {recurring ? <div>Stream Modal</div> : <div>Tip Modal</div>}
        <h2>To: creator address</h2>
        <h2>From: user account</h2>
      </div>
    </div>
  );
};

export default ContributeModal;
