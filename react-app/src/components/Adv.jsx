import coGaiAoDo from "../image/frm/frm2/Rectangle 1078.png";
import coGaiAoTrang from "../image/frm/frm2/Rectangle.png";

const Advv = [
  {
    id: 1,
    h1: "Never-Ending Summer",
    dedescription: "Throwback Shirts & all-day dressed",
    link: "Exlopre all category",
    img: coGaiAoDo,
  },
  {
    id: 2,
    h1: "The most famous sport brands",
    dedescription: "Get in gym essentials",
    link: "Exlopre all category",
    img: coGaiAoTrang,
  },
];

const Adv = () => {
  return (
    <div className="mx-5 mt-0 flex h-full items-center gap-5 mdd:mx-[90px] mdd:mt-[68px] mdd:h-[467px] lgg:mx-[90px] lgg:mt-[68px] lgg:h-[393px]">
      {Advv.map((data) => (
        <div
          key={data.id}
          className={`${data.id === 2 ? "hidden smm:block" : ""}`}
        >
          <div className="flex h-[280px] w-[438px] mdd:h-[467px] mdd:w-[395.5px] lgg:h-[383px] lgg:w-[620px]">
            <div
              className={`${data.id === 1 ? "bg-[#BF2E3B]" : "bg-[#1D5159]"} text-white`}
            >
              <div className="h-[280px] w-[219px] font-lato mdd:h-[467px] mdd:w-[197.75px] lgg:h-[383px] lgg:w-[310px]">
                <div className="mx-[20px] mt-[32px] mdd:mx-[20px] mdd:mt-[68px] lgg:mx-[20px] lgg:mt-[68px]">
                  <div className="text-[24px] font-extrabold mdd:text-[36px] lgg:text-[36px]">
                    {data.h1}
                  </div>
                  <div className="mt-2 text-[18px] mdd:mt-[16px] mdd:text-[28px] lgg:mt-[16px] lgg:text-[28px]">
                    {data.dedescription}
                  </div>
                </div>
                <div className="mx-[20px] mt-[8px] font-lato text-[18px] underline mdd:mx-[18px] mdd:mt-[31px] mdd:text-[18px] lgg:mx-[20px] lgg:mt-[31px] lgg:text-[20px]">
                  {data.link}
                </div>
              </div>
            </div>
            <div className="flex h-[280px] w-[219px] mdd:h-[467px] mdd:w-[197.75px] lgg:h-[383px] lgg:w-[310px]">
              <img src={data.img} alt="coGaiAoDo" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Adv;
