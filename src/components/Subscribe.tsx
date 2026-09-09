import bg from "../assets/bg-shadow.png";

const Subscribe = () => {
  return (
    <div className="border-2 border-[#dcdcdc] p-4 lg:p-6 rounded-2xl absolute translate-y-[-50%] w-full">
      <div
        style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat" }}
        className="mx-auto py-12 lg:py-24 rounded-2xl bg-white p-3 lg:px-2"
      >
        <h2 className="font-bold text-3xl text-center">
          Subscribe to our Newsletter
        </h2>
        <p className="text-[#5a5a5a] text-center mt-2 mb-4">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="mx-auto max-w-[541px] gap-4  flex items-center flex-col lg:flex-row">
          <input
            className="flex-1 w-full lg:w-auto px-7 py-3 border-2 border-[#dcdcdc] outline-0 rounded-xl"
            type="text"
            placeholder="Enter your Email"
          />
          <button className="rounded-xl block lg:inline w-full lg:w-auto bg-gradient-to-r from-[#F5D76E] via-[#F4A261] to-[#E8799A] px-7 py-3 font-semibold text-black cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
