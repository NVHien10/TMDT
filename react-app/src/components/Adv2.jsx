import coGaiAoHong from "../image/frm/frm2/RectangleAoHong.png";
import coGaiAoXanh from "../image/frm/frm2/RectangleAoXanh.png";

const Advv = [
  {
    id: 1,
    h1: "The Pinky Barbie Edition",
    dedescription: "Lets play dress up",
    link: "Exlopre all category",
    img: coGaiAoHong,
  },
  {
    id: 2,
    h1: "Best Lovin Sellers",
    dedescription: "Bikini & Poolside glam include",
    link: "Exlopre all category",
    img: coGaiAoXanh,
  },
];
const Adv2 = () => {
  return (
    <div className="mx-5 mt-5 flex h-full items-center gap-5 mdd:mx-[90px] mdd:mt-[68px] mdd:h-[467px] lgg:mx-[90px] lgg:mt-[68px] lgg:h-[347px]">
      {Advv.map((data) => (
        <div
          key={data.id}
          className={`${data.id === 1 ? "hidden smm:block" : ""}`}
        >
          <div className="flex h-[280px] w-[438px] mdd:h-[467px] mdd:w-[395.5px] lgg:h-[347px] lgg:w-[620px]">
            <div
              className={`${data.id === 1 ? "bg-[#D11FB5]" : "bg-[#0186C4]"} text-white`}
            >
              <div className="h-[280px] w-[219px] font-lato mdd:h-[467px] mdd:w-[197.75px] lgg:h-[347px] lgg:w-[310px]">
                <div className="mx-[20px] mt-[32px] mdd:mx-[20px] mdd:mt-[68px] lgg:mx-[20px] lgg:mt-[68px]">
                  <div className="text-[24px] font-extrabold mdd:text-[36px] lgg:text-[36px]">
                    {data.h1}
                  </div>
                  <div className="mt-2 text-[18px] mdd:mt-[16px] mdd:text-[28px] lgg:mt-[16px] lgg:text-[28px]">
                    {data.dedescription}
                  </div>
                </div>
                <div className="mx-[20px] mt-[8px] font-lato text-[18px] underline mdd:mx-[20px] mdd:mt-[31px] mdd:text-[20px] lgg:mx-[20px] lgg:mt-[31px] lgg:text-[20px]">
                  {data.link}
                </div>
              </div>
            </div>
            <div className="flex h-[280px] w-[219px] mdd:h-[467px] mdd:w-[197.75px] lgg:h-[347px] lgg:w-[310px]">
              <img src={data.img} alt="coGaiAoDo" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Adv2;
