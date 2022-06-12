const Tip = () => {
  return (
    <div>
      <h2>To: creator address</h2>
      <h2>From: user account</h2>
      <label htmlFor="amount">Amount to tip: </label>
      <input
        type="text"
        className="border border-slate-200 rounded-md"
        placeholder="ETH "
      />{" "}
      ETH
      <button className="px-4 py-2 bg-blue-500 rounded-md text-white font-bold block">
        Submit
      </button>
    </div>
  );
};

export default Tip;