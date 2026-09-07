import bannerIMG from "../assets/banner-main.png";
import heroBg from "../assets/bg-shadow.png";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="bg-black py-16 rounded-2xl"
    >
      <img className="mx-auto" src={bannerIMG} alt="" />
      <h1 className="text-center font-bold text-4xl text-white my-7">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="text-2xl text-center text-[#B9B9B9] mb-4">
        Beyond Boundaries Beyond Limits
      </p>
      <div className="border-2 border-[#d7ec27] p-2 rounded-xl w-fit mx-auto">
        <button className="bg-[#d7ec27] font-bold rounded-xl px-5 py-3 cursor-pointer hover:text-[#d7ec27] transition duration-500 hover:bg-transparent">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
