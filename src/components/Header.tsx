import navLogo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="backdrop-blur-lg fixed top-0 w-full py-3">
      <div className="w-[85%] mx-auto flex items-center justify-between ">
        <img className="h-[65px]" src={navLogo} alt="" />
        <div className=" flex items-center gap-5">
          <ul className="flex items-center gap-5">
            <li>
              <a className="text-[#595959] text-lg" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="text-[#595959] text-lg" href="#">
                Fixture
              </a>
            </li>
            <li>
              <a className="text-[#595959] text-lg" href="#">
                Teams
              </a>
            </li>
            <li>
              <a className="text-[#595959] text-lg" href="#">
                Schedules
              </a>
            </li>
          </ul>

          <div className="border border-[#e7e7e7] flex items-center gap-4 px-5 rounded-xl py-3">
            <h3 className="text-[#595959] text-lg flex items-center gap-3">
              <span>0</span> <span>Coin</span>
            </h3>
            <img
              className="w-5 h-5"
              src="https://i.ibb.co.com/RGvmLg8K/dollar-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
