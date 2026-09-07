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
      className="bg-black"
    >
      <img className="mx-auto" src={bannerIMG} alt="" />
      <h1 className="text-center font-bold text-4xl text-white">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="text-2xl text-center text-[#B9B9B9]">
        Beyond Boundaries Beyond Limits
      </p>
      <div>
        <button className="bg-[#d7ec27] font-medium rounded-xl px-3 py-3">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
