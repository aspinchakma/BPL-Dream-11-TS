import FooterLogo from "../assets/logo-footer.png";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="bg-[#06091A] text-white pt-28 pb-4">
      <img className="mx-auto" src={FooterLogo} alt="" />
      <div className="w-[95%] lg:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 justify-between mt-14">
        <div>
          <h2 className="font-bold mb-4 text-lg">About Us</h2>
          <p className="max-w-[291px] text-[#9b9da3]">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>
        <div>
          <h2 className="font-bold mb-4 text-lg">Quick Links</h2>
          <ul className="text-[#9b9da3] list-disc">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-4 text-lg">Subscribe</h2>
          <p className="text-[#9b9da3] mb-3">
            Subscribe to our newsletter for <br /> the latest updates.
          </p>
          <div>
            <input
              className="bg-white px-7 py-3 rounded-tl-xl rounded-bl-xl outline-none"
              type="text"
              placeholder="Enter your email"
            />
            <button className="rounded-tr-xl rounded-br-xl bg-gradient-to-r from-[#F5D76E] via-[#F4A261] to-[#E8799A] px-7 py-3 font-semibold text-black cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="lg:w-[85%] mx-auto w-[95%]">
        <div className="bg-[#2b2e3b] h-[2px] my-10"></div>
        <p className="text-center text-[#9b9da3]">
          @{year} Your Company All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
