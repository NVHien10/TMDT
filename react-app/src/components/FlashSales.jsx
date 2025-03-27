import muiTenBag from "../image/frm/frm2/Vector175_bag.png";
import star from "../image/frm/frm2/Star 2.png";
import ColonHaiCham from "../image/frm/frm2/ColonHaiCham.png";
import bag from "../image/frm/frm2/photo bag.png";
import Giay from "../image/frm/frm2/photoGiay.png";
import bagHong from "../image/frm/frm2/photobagHong.png";
import Sticker from "../image/frm/frm2/photoSticker.png";

const FlashSale = [
  {
    id: 1,
    nameDay: "Deal of the Day",
    hour: "12",
    min: "43",
    sec: "12",
    img: bag,
    name: "Tonny Black",
    description: "Shoulder bag-White-Plain",
    vote: 54,
    cost: 69.99,
    maxCost: 129.99,
    discout: 40,
  },
  {
    id: 2,
    nameDay: "Deal of the Day",
    hour: "12",
    min: "43",
    sec: "12",
    img: Giay,
    name: "Tonny Black",
    description: "Shoulder bag-White-Plain",
    vote: 54,
    cost: 69.99,
    maxCost: 129.99,
    discout: 40,
  },
  {
    id: 3,
    nameDay: "Deal of the Day",
    hour: "12",
    min: "43",
    sec: "12",
    img: bagHong,
    name: "Tonny Black",
    description: "Shoulder bag-White-Plain",
    vote: 54,
    cost: 69.99,
    maxCost: 129.99,
    discout: 40,
  },
  {
    id: 4,
    nameDay: "Deal of the Day",
    hour: "12",
    min: "43",
    sec: "12",
    img: Sticker,
    name: "Tonny Black",
    description: "Shoulder bag-White-Plain",
    vote: 54,
    cost: 69.99,
    maxCost: 129.99,
    discout: 40,
  },
];
const FlashSales = () => {
  return (
    <div className=" ml-[20px] mt-[84px] mdd:ml-0 mdd:h-[848px] mdd:w-[991px] lgg:ml-0 lgg:h-[448px] lgg:w-[1440px]">
      <div className="phan1 mx-0 my-[24px] mr-[20px] flex justify-between mdd:mx-[90px] mdd:mb-[48px] lgg:mx-[90px] lgg:mb-[48px]">
        <div className="font-lato text-[20px] font-medium md:text-[28px] lg:text-[28px]">
          Flash Sales
        </div>
        <div className="flex items-center">
          <div className="pr-2 font-lato text-[12px]">View all</div>
          <div>
            <img src={muiTenBag} alt="muiTenBag" />
          </div>
        </div>
      </div>
      <div className="mx-0 mr-0 flex h-full overflow-x-scroll mdd:mx-[90px] mdd:grid mdd:grid-cols-2 lgg:mx-[90px] lgg:grid lgg:grid-cols-4">
        {FlashSale.map((data) => (
          <div
            key={data.id}
            className="mb-0 mr-[20px] h-[380px] items-center rounded-md border-2 mdd:mb-[20px] mdd:w-[396px] lgg:w-[300px]"
          >
            <div className="h-[77px] w-full items-center justify-center pt-[16px] mdd:flex mdd:px-[71px] lgg:grid lgg:h-[77px]">
              <div className="pr-0 text-center font-lato text-[14px] font-extrabold text-[#9D9D9D] mdd:pr-1 lgg:pr-0">
                {data.nameDay}
              </div>
              <div className="items-center text-center lgg:mx-[90px]">
                <div className="flex items-center justify-center text-center">
                  <div className="font-lato text-[18px] font-extrabold">
                    {data.hour}
                  </div>
                  <div className="px-1">
                    <img src={ColonHaiCham} alt="ColonHaiCham" />
                  </div>
                  <div className="font-lato text-[18px] font-extrabold">
                    {data.min}
                  </div>
                  <div className="px-1">
                    <img src={ColonHaiCham} alt="ColonHaiCham" />
                  </div>
                  <div className="font-lato text-[18px] font-extrabold">
                    {data.sec}
                  </div>
                </div>

                <div className="flex items-center justify-center font-lato text-[12px] text-[#9D9D9D]">
                  <div className="pr-[27px]">hour</div>
                  <div className="pr-[27px]">min</div>
                  <div>sec</div>
                </div>
              </div>
            </div>

            <div className="h-[162px] w-full">
              {
                <img
                  className="mb-[16px] ml-[29px] mr-[30px] mt-[17px] h-[129px] w-[241px]"
                  src={data.img}
                  alt="bag"
                />
              }
            </div>

            <div className="h-[128px] w-[300px] px-[74.5px]">
              <h1 className="font-lato text-[16px] font-extrabold">
                {data.name}
              </h1>
              <div className="py-[6px] font-lato text-[12px]">
                {data.description}
              </div>
              <div className="flex items-center pb-[6px]">
                <div className="start flex">
                  <div>
                    <img src={star} alt="star" />
                  </div>
                  <div>
                    <img src={star} alt="star" />
                  </div>
                  <div>
                    <img src={star} alt="star" />
                  </div>
                  <div>
                    <img src={star} alt="star" />
                  </div>
                </div>
                <div className="pl-2 font-lato text-[12px]">({data.vote})</div>
              </div>
              <div className="cardDown flex items-center">
                <div className="font-lato text-[14px] font-bold text-[#FF2E00]">
                  ${data.cost}
                </div>
                <div className="px-2 font-lato text-[12px] text-[#555555]">
                  ${data.maxCost}
                </div>
                <div className="inline-block bg-[#FF2E00]">
                  <div className="text- font-Inter text-[8px] font-semibold text-white">
                    - {data.discout}%
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

export default FlashSales;
