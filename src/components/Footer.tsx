import FooterLogo from "../assets/logo-footer.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#06091A] text-white pt-32 lg:pt-56 pb-4">
      <img
        className="mx-auto max-w-[80%] sm:max-w-full"
        src={FooterLogo}
        alt="Footer Logo"
      />

      <div className="w-[90%] lg:w-[85%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-4 mt-14">
        <div>
          <h2 className="font-bold mb-4 text-lg">About Us</h2>

          <p className="max-w-[291px] text-[#9b9da3]">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        <div>
          <h2 className="font-bold mb-4 text-lg">Quick Links</h2>

          <ul className="text-[#9b9da3] list-disc list-inside space-y-1">
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

          <p className="text-[#9b9da3] mb-3 max-w-[300px]">
            Subscribe to our newsletter for the latest updates.
          </p>

          <div className="flex flex-col gap-3 lg:gap-0 sm:flex-row w-full max-w-[450px]">
            <input
              className="bg-white text-black px-5 py-3 outline-none w-full lg:rounded-bl-xl lg:rounded-tl-xl "
              type="email"
              placeholder="Enter your email"
            />

            <button
              className="bg-gradient-to-r from-[#F5D76E] via-[#F4A261] to-[#E8799A]
              px-6 py-3 font-semibold text-black cursor-pointer
              lg:rounded-tr-xl lg:rounded-br-xl
              whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="lg:w-[85%] w-[90%] mx-auto">
        <div className="bg-[#2b2e3b] h-[2px] my-10" />

        <p className="text-center text-[#9b9da3] text-sm">
          @{year} Your Company All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
