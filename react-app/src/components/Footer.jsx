import Visa from "../image/footer/imageVisa.png";
import pre from "../image/footer/image-pre.png";
import paypal from "../image/footer/LogoPaypal.png";
import arrow from "../image/footer/Arrow.png";
import iconIntergram from "../image/header/Vector 2998.png";
import facebook from "../image/header/Vector 2998.png";
import telegram from "../image/header/Subtract.png";
import thanhTimKiem from "../image/footer/VectorTImKiem.png";
import divider from "../image/footer/Divider.png";
import PropTypes from "prop-types";
const Foot = [
  {
    id: 1,
    h1: "Company",
    item: ["About Us", "Our Store", "Contact us"],
  },
  {
    id: 2,
    h1: "Career Opportunities",
    item: ["Selling Programs", "Advertise", "Cooperation "],
  },
  {
    id: 3,
    h1: "How to Buy",
    item: [
      "Making Payments",
      "Delivery Options",
      "Buyer Protection",
      "New User Guide",
    ],
  },
  {
    id: 4,
    h1: "Help",
    item: ["Contacts Us", "FAQ", "Privacy Policy"],
  },
];
const Footer = ({ showMenu }) => {
  return (
    <div className="footer mt-0 h-[579px] w-[478px] mdd:mt-[148px] mdd:h-[817px] mdd:w-fit lgg:mt-[148px] lgg:h-[622px] lgg:w-[1440px]">
      {showMenu ? (
        <div className="hidden"></div>
      ) : (
        <>
          <div className="">
            {/* h-fit w-fit mdd:h-[817px] mdd:w-[991px] lgg:h-[362px] lgg:w-[1440px] */}
            <div className="relative grid w-full grid-cols-2 items-center justify-center bg-[#D1E2EB] pb-[60px] pl-[85.5px] pr-[30.5px] pt-[60px] mdd:grid mdd:h-fit mdd:w-full mdd:grid-cols-2 mdd:pb-[60px] mdd:pl-[303px] mdd:pr-[248px] mdd:pt-[132px] lgg:flex lgg:w-full lgg:pb-[60px] lgg:pl-0 lgg:pr-0 lgg:pt-[132px]">
              <div className="absolute -top-20 right-0 hidden h-fit w-fit text-center mdd:right-[210px] mdd:flex mdd:h-[187px] mdd:w-[571px] lgg:right-auto lgg:flex lgg:h-[187px] lgg:w-[571px]">
                <div className="w-full rounded-2xl bg-[#7296AB]">
                  <div className="mx-0 mt-0 mdd:mx-0 mdd:mt-0 lgg:mx-[56px] lgg:mt-[32px]">
                    <div className="font-lato text-[32px] font-bold text-white">
                      Luminae Store
                    </div>

                    <div className="font-lato text-[16px] text-white">
                      Register your email not to miss the last minutes off +
                      Free delivery
                    </div>
                  </div>
                  <div className="relative mx-0 mt-0 h-fit w-fit px-0 pb-0 pt-0 mdd:mx-[151.5px] mdd:mt-[24px] lgg:mx-0 lgg:mt-0 lgg:px-[151.5px] lgg:pb-[32px] lgg:pt-[24px]">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="relative text-[14px] mdd:h-[36px] mdd:w-[268px] lgg:h-[36px] lgg:w-[262px] lgg:pl-[12px]"
                    />
                    <div className="absolute right-0 top-0 mdd:right-[10px] mdd:top-[10px] lgg:right-[160px] lgg:top-[36px]">
                      <img src={thanhTimKiem} alt="thanhTimKiem" />
                    </div>
                  </div>
                </div>
              </div>

              {Foot.map((data) => (
                <div
                  key={data.id}
                  className="mr-0 flex mdd:mr-0 mdd:pb-[60px] lgg:mr-[126px]"
                >
                  <div>
                    <div className="pb-[25px] font-lato text-[14px] font-bold">
                      {data.h1}
                    </div>
                    <ul className="font-lato text-[14px]">
                      {data.item.map((subItem, index) => (
                        <div className="pb-[15px]" key={index}>
                          {subItem}
                        </div>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
            <div className="h-[78px] w-[478px] mdd:h-[173px] mdd:w-[991px] lgg:h-[173px] lgg:w-[1440px]">
              <div className="visa mx-[126.5px] my-[24px] flex justify-between pt-0 mdd:mx-[100px] mdd:my-0 mdd:pt-[24px] lgg:mx-[100px] lgg:my-0 lgg:pt-[24px]">
                <div>
                  <div>
                    <div>
                      <div className="flex">
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

                <div className="hidden md:block lg:block">
                  <div className="flex items-center">
                    <div>English</div>
                    <div className="pl-2">
                      <img src={arrow} alt="arrow" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-0 my-0 hidden md:block mdd:mx-[100px] mdd:my-[12px] lg:block lgg:mx-[100px] lgg:my-[12px]">
                <img src={divider} alt="divider" />
              </div>
              <div className="mx-0 mb-0 hidden items-center justify-between md:flex mdd:mx-[100px] mdd:mb-[24px] lg:flex lgg:mx-[100px] lgg:mb-[24px] lgg:h-[69px] lgg:w-[1240px]">
                <div className="text-[14px]">
                  165-179 Forster Road City of Monash, Melbourne, Australia
                </div>
                <div className="text-[14px]">
                  ©2023 Copyright in reserved for lumine shop
                </div>
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
        </>
      )}
    </div>
  );
};
Footer.propTypes = {
  showMenu: PropTypes.bool.isRequired, // xác định kiểu bool và bắt buộc
};
export default Footer;
