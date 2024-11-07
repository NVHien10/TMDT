import iconButton from "../image/frm/frm2/iconButton.png";
import trendPhoto1 from "../image/frm/frm2/4_org_zoom 1.png";
import muiTenBag from "../image/frm/frm2/Vector175_bag.png";
import trendPhoto2 from "../image/frm/frm2/top.png";
import trendPhoto3 from "../image/frm/frm2/top2.png";

const Trendingg = [
  {
    id: 1,
    img: trendPhoto1,
    name: "Cool & Sexy Calvin Klein",
    description: "Dotted dress-Casual",
    cost: 89,
  },
  {
    id: 2,
    img: trendPhoto2,
    name: "Cool & Sexy Calvin Klein",
    description: "Dotted dress-Casual",
    cost: 89,
  },
  {
    id: 3,
    img: trendPhoto3,
    name: "Beige coat Zara",
    description: "Cream-Brown-Formal",
    cost: 102,
  },
];
const Trending = () => {
  return (
    <div className="ml-[20px] mt-[48px] h-[481px] w-[438px] mdd:ml-0 mdd:mt-[68px] mdd:h-[1419px] mdd:w-[991px] lgg:ml-0 lgg:mt-[68px] lgg:h-[507px] lgg:w-[1440px]">
      <div className="phan1 mx-0 mr-[20px] flex justify-between mdd:mx-[90px] lgg:mx-[90px] lgg:mb-[0px]">
        <div className="font-lato text-[20px] font-medium md:text-[28px] lg:text-[28px]">
          Trending must-haves
        </div>
        <div className="flex items-center">
          <div className="pr-2 font-lato text-[12px]">View all</div>
          <div>
            <img src={muiTenBag} alt="muiTenBag" />
          </div>
        </div>
      </div>

      <div className="mt-[24px] flex h-full overflow-x-scroll mdd:mx-[90px] mdd:mt-[48px] mdd:grid mdd:h-fit mdd:grid-cols-1 mdd:grid-rows-3 lgg:mx-[90px] lgg:mt-[50px] lgg:grid lgg:h-[437px] lgg:grid-cols-3 lgg:grid-rows-1">
        {Trendingg.map((data) => (
          <div
            key={data.id}
            className="mb-0 mr-[20px] h-[437px] w-[357px] mdd:mb-[20px] mdd:h-[437px] mdd:w-[811px] lgg:mr-[20px] lgg:h-[437px] lgg:w-[406px]"
          >
            <div className="relative w-[357px] mdd:w-[811px] lgg:w-[406px]">
              <img
                src={data.img}
                alt="trendPhoto1"
                className="h-[344px] w-full"
              />
              <div className="absolute top-2 pl-2">
                <div>
                  <div className="bg-green-400 py-1 pr-2">
                    <div className="flex">
                      <div className="icon pr-2">
                        <div>
                          <img src={iconButton} alt="iconButton" />
                        </div>
                      </div>
                      <div className="font-lato text-[10px] text-white">
                        New Arivals
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-0 flex h-[93px] items-center justify-between bg-black py-0 pl-0 text-white md:w-full mdd:h-[93px] lg:flex lgg:h-[93px] lgg:py-[17.5px] lgg:pl-[20px]">
              <div className="mdd:w- w-[171px] py-[7.5px] pl-2 mdd:w-full lgg:w-full">
                <h1 className="font-lato text-[16px] font-bold">{data.name}</h1>
                <div className="mt-0 font-lato text-[14px] text-[#C4C4C4] lgg:mt-[13px]">
                  {data.description}
                </div>
              </div>
              <div className="pr-[20px]">
                <div className="">
                  <div className="flex h-[44px] w-[146px] items-center rounded-md border-2 border-white px-[14px] py-[12px]">
                    <div className="pr-1 font-lato font-bold text-[14x]">
                      ${data.cost}
                    </div>
                    <div className="font-lato font-semibold text-[14x]">
                      Shop Now
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
