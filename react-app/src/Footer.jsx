import Visa from "./image/footer/imageVisa.png";
import pre from "./image/footer/image-pre.png";
import paypal from "./image/footer/LogoPaypal.png";
import arrow from "./image/footer/Arrow.png";
import iconIntergram from "./image/header/Vector 2998.png";
import facebook from "./image/header/Vector 2998.png";
import telegram from "./image/header/Subtract.png";
import thanhTimKiem from "./image/footer/VectorTImKiem.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <div className="relative items-center justify-center bg-[#D1E2EB] py-[7rem] lg:flex">
            <div className="absolute -top-20 right-[490px] text-center sm:hidden md:hidden lg:flex">
              <div className="rounded-2xl bg-[#7296AB] p-8">
                <div className="font-lato text-[32px] font-bold text-white">
                  Luminae Store
                </div>
                <div className="font-lato text-[16px] text-white">
                  Register your email not to miss the last minutes off + Free
                  delivery
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="relative mt-5"
                  />
                  <div className="absolute right-1/3 top-1/2">
                    <img src={thanhTimKiem} alt="thanhTimKiem" />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid text-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="py-4 font-lato text-[14px] font-bold">
                  Company
                </div>
                <ul className="font-lato text-[14px]">
                  <li>About Us</li>
                  <li>Our Store</li>
                  <li>Our Store</li>
                </ul>
              </div>
              <div>
                <div className="py-4 font-lato text-[14px] font-bold">
                  Career Opportunities
                </div>
                <ul className="font-lato text-[14px]">
                  <li>Selling Programs</li>
                  <li>Advertise</li>
                  <li>Cooperation opportunities</li>
                </ul>
              </div>

              <div>
                <div className="py-4 font-lato text-[14px] font-bold">
                  How to Buy
                </div>
                <ul className="font-lato text-[14px]">
                  <li>Making Payments</li>
                  <li>Delivery Options</li>
                  <li>Buyer Protection</li>
                  <li>New User Guide</li>
                </ul>
              </div>

              <div>
                <div className="py-4 font-lato text-[14px] font-bold">Help</div>
                <ul className="font-lato text-[14px]">
                  <li>Contact Us</li>
                  <li>FAQ</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6">
          <div className="visa flex">
            <div>
              <div>
                <div>
                  <div className="flex pl-16">
                    <div>
                      <img src={Visa} alt="Visa" />
                    </div>
                    <div className="pl-5">
                      <img src={pre} alt="pre" />
                    </div>
                    <div className="pl-5">
                      <img src={paypal} alt="paypal" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pl-[810px]">
              <div className="flex items-center">
                <div>English</div>
                <div className="pl-2">
                  <img src={arrow} alt="arrow" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <hr className="ml-16 mr-16 border-t-2 *:border-gray-400"></hr>
          </div>
          <div className="flex items-center">
            <div className="pl-16">
              165-179 Forster Road City of Monash, Melbourne, Australia
            </div>
            <div className="pl-80">©2023 Copyright</div>
            <div className="ml-64 flex h-full items-center justify-center space-x-2 bg-white">
              <div>
                <img src={iconIntergram} alt="intergram" />
              </div>
              <div className="pl-2 pr-2">
                <img src={facebook} alt="facebook" />
              </div>
              <div>
                <img src={telegram} alt="telegram" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
