interface StreamModalProps {
  setStreamModal: (a: boolean) => void;
}

const StreamModal = (props: StreamModalProps) => {
  return (
    <div className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
      <div
        className="absolute bg-black opacity-50 inset-0 z-0"
        onClick={() => props.setStreamModal(false)}
      ></div>
      <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-white">
        Stream Modal
      </div>
    </div>
  );
};

export default StreamModal;
