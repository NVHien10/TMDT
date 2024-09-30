import left from "./image/frm/frm1/left.png";
import bag from "./image/frm/frm2/photo bag.png";
import muiTenBag from "./image/frm/frm2/Vector175_bag.png";
import ColonHaiCham from "./image/frm/frm2/ColonHaiCham.png";
import star from "./image/frm/frm2/Star 2.png";
import Giay from "./image/frm/frm2/photoGiay.png";
import bagHong from "./image/frm/frm2/photobagHong.png";
import Sticker from "./image/frm/frm2/photoSticker.png";
import trendPhoto1 from "./image/frm/frm2/4_org_zoom 1.png";
import iconButton from "./image/frm/frm2/iconButton.png";
import trendPhoto2 from "./image/frm/frm2/top.png";
import trendPhoto3 from "./image/frm/frm2/top2.png";
import iconTim from "./image/frm/frm2/VectorTim.png";
import blackGirl from "./image/frm/frm2/photoCoGaiAoDen.png";
import coGaiAoDo from "./image/frm/frm2/Rectangle 1078.png";
import coGaiAoTrang from "./image/frm/frm2/Rectangle.png";
import reTrai from "./image/frm/frm2/vectorLeft.png";
import rePhai from "./image/frm/frm2/VectorRight.png";
import iphone from "./image/frm/frm2/Iphone.png";
import coGaiAoHong from "./image/frm/frm2/RectangleAoHong.png";
import coGaiAoXanh from "./image/frm/frm2/RectangleAoXanh.png";
import aoxanh from "./image/frm/frm2/aoxanh.png";
import aoxanhrieu from "./image/frm/frm2/aoxanhrieu.png";
import aoden from "./image/frm/frm2/aoden.png";
<im></im>;
const Frm = () => {
  return (
    <div className="w-full">
      <div className="grid w-full grid-cols-12">
        <div className="md:col-span-6 lg:col-span-4">
          <img src={left} alt="left" />
        </div>

        <div className="relative items-center justify-center bg-[#558bff] md:col-span-6 lg:col-span-8">
          <div className="absolute -left-[13%] top-1/3 text-center md:hidden lg:block">
            <div className="bg-white lg:px-1 lg:py-1">
              <div className="font-lato text-[20px] font-bold">
                Summer Essentials
              </div>
              <div className="font-lato text-[20px] font-bold text-red-600">
                20% off
              </div>
            </div>
            <div className="bg-black py-1 text-center font-lato text-[14px] text-white">
              19 Jul-30 Jul
            </div>
          </div>

          <div className="absolute font-lato text-[32px] font-bold text-white md:top-[10%] md:text-center lg:right-[14%] lg:top-1/4">
            KIMONOS, CAFTANS & PAREOS
          </div>
          <div className="absolute font-lato text-[28px] font-medium text-white md:top-[45%] md:px-[30px] md:text-center lg:right-[15%] lg:top-[40%]">
            Poolside glam included From $4.99
          </div>
          <div className="absolute md:right-[25%] md:top-3/4 lg:right-[40%] lg:top-2/3">
            <button className="rounded bg-[#4172DC] px-14 py-2 font-lato text-[14px] text-white hover:bg-blue-700">
              SHOP NOW
            </button>
          </div>
        </div>
        <div></div>
      </div>

      <div className="grid w-full grid-rows-4 pt-10">
        <div className="1">
          <div className="aa w-full">
            <div className="phan1 grid grid-cols-10 px-[90px]">
              <div className="col-span-9 w-full font-lato text-[28px] font-medium">
                Flash Sales
              </div>
              <div className="flex items-center">
                <div className="pr-2 font-lato text-[12px]">View all</div>
                <div className="">
                  <img src={muiTenBag} alt="muiTenBag" />
                </div>
              </div>
            </div>

            <div className="Phan2 grid items-center px-16 pt-9 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="grid grid-rows-10">
                <div className="row-span-2 items-center justify-center text-center md:flex lg:grid">
                  <div className="justify-center text-center font-lato text-[16px] font-extrabold text-[#9D9D9D]">
                    Deal of the day
                  </div>
                  <div className="grid grid-rows-2 items-center px-5 text-center">
                    <div className="flex items-center text-center">
                      <div className="font-lato text-[18px] font-extrabold">
                        12
                      </div>
                      <div className="px-1">
                        <img src={ColonHaiCham} alt="ColonHaiCham" />
                      </div>
                      <div className="font-lato text-[18px] font-extrabold">
                        43
                      </div>
                      <div className="px-1">
                        <img src={ColonHaiCham} alt="ColonHaiCham" />
                      </div>
                      <div className="font-lato text-[18px] font-extrabold">
                        12
                      </div>
                    </div>
                    <div className="grid grid-cols-3 font-lato text-[12px] text-[#9D9D9D]">
                      <div>hour</div>
                      <div>min</div>
                      <div>sec</div>
                    </div>
                  </div>
                </div>
                <div className="row-span-4">
                  <img src={bag} alt="bag" />
                </div>

                <div className="row-span-4 px-10">
                  <div className="font-lato text-[16px] font-extrabold">
                    Tonny Black
                  </div>
                  <div className="py-[6px] font-lato text-[12px]">
                    Shoulder bag-White-Plain
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
                    <div className="pl-2 font-lato text-[12px]">(54)</div>
                  </div>
                  <div className="cardDown flex items-center pb-[15px]">
                    <div className="font-lato text-[14px] font-bold text-[#FF2E00]">
                      $69.99
                    </div>
                    <div className="pl-2 pr-2 font-lato text-[12px] text-[#555555]">
                      $129.99
                    </div>
                    <div className="inline-block bg-[#FF2E00]">
                      <div className="text- font-Inter text-[8px] font-semibold text-white">
                        - 40%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-rows-10">
                <div className="row-span-2 items-center justify-center text-center md:flex lg:grid">
                  <div className="justify-center text-center font-lato text-[16px] font-extrabold text-[#9D9D9D]">
                    Deal of the day
                  </div>
                  <div className="row-span-2 grid grid-rows-2 items-center px-5 text-center">
                    <div className="flex items-center text-center">
                      <div className="font-lato text-[18px] font-extrabold">
                        02
                      </div>
                      <div className="px-1">
                        <img src={ColonHaiCham} alt="ColonHaiCham" />
                      </div>
                      <div className="font-lato text-[18px] font-extrabold">
                        05
                      </div>
                      <div className="px-1">
                        <img src={ColonHaiCham} alt="ColonHaiCham" />
                      </div>
                      <div className="font-lato text-[18px] font-extrabold">
                        32
                      </div>
                    </div>
                    <div className="grid grid-cols-3 font-lato text-[12px] text-[#9D9D9D]">
                      <div>hour</div>
                      <div>min</div>
                      <div>sec</div>
                    </div>
                  </div>
                </div>
                <div className="row-span-4">
                  <img src={Giay} alt="Giay" />
                </div>

                <div className="row-span-4 px-10">
                  <div className="font-lato text-[16px] font-extrabold">
                    Reebok
                  </div>
                  <div className="py-[6px] font-lato text-[12px]">
                    Women s Powder sneakers
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
                    <div className="pl-2 font-lato text-[12px]">(54)</div>
                  </div>
                  <div className="cardDown flex items-center pb-[15px]">
                    <div className="font-lato text-[14px] font-bold text-[#FF2E00]">
                      $112.02
                    </div>
                    <div className="pl-2 pr-2 font-lato text-[12px] text-[#555555]">
                      $129.99
                    </div>
                    <div className="inline-block bg-[#FF2E00]">
                      <div className="text- font-Inter text-[8px] font-semibold text-white">
                        - 40%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-rows-10">
                <div className="row-span-2 items-center justify-center text-center md:flex lg:grid">
                  <div className="justify-center text-center font-lato text-[16px] font-extrabold text-[#9D9D9D]">
                    Deal of the day
                  </div>
                  <div className="row-span-2 grid grid-rows-2 items-center px-5 text-center">
                    <div className="flex items-center text-center">
                      <div className="font-lato text-[18px] font-extrabold">
                        02
                      </div>
                      <div className="px-1">
                        <img src={ColonHaiCham} alt="ColonHaiCham" />
                      </div>
                      <div className="font-lato text-[18px] font-extrabold">
                        14
                      </div>
                      <div className="px-1">
                        <img src={ColonHaiCham} alt="ColonHaiCham" />
                      </div>
                      <div className="font-lato text-[18px] font-extrabold">
                        21
                      </div>
                    </div>
                    <div className="grid grid-cols-3 font-lato text-[12px] text-[#9D9D9D]">
                      <div>hour</div>
                      <div>min</div>
                      <div>sec</div>
                    </div>
                  </div>
                </div>
                <div className="row-span-4">
                  <img src={bagHong} alt="bagHong" />
                </div>

                <div className="row-span-4 px-10">
                  <div className="font-lato text-[16px] font-extrabold">
                    Patso
                  </div>
                  <div className="py-[6px] font-lato text-[12px]">
                    Shoulder bag-Pink-Plain
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
                    <div className="pl-2 font-lato text-[12px]">(54)</div>
                  </div>
                  <div className="cardDown flex items-center pb-[15px]">
                    <div className="font-lato text-[14px] font-bold text-[#FF2E00]">
                      $69.99
                    </div>
                    <div className="pl-2 pr-2 font-lato text-[12px] text-[#555555]">
                      $129.99
                    </div>
                    <div className="inline-block bg-[#FF2E00]">
                      <div className="text- font-Inter text-[8px] font-semibold text-white">
                        - 40%
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-rows-10">
                <div className="row-span-2 items-center justify-center text-center md:flex lg:grid">
                  <div className="justify-center text-center font-lato text-[16px] font-extrabold text-[#9D9D9D]">
                    Deal of the day
                  </div>
                  <div className="row-span-2 grid grid-rows-2 items-center px-5 text-center">
                    <div className="flex items-center text-center">
                      <div className="font-lato text-[18px] font-extrabold">
                        25
                      </div>
                      <div className="px-1">
                        <img src={ColonHaiCham} alt="ColonHaiCham" />
                      </div>
                      <div className="font-lato text-[18px] font-extrabold">
                        11
                      </div>
                      <div className="px-1">
                        <img src={ColonHaiCham} alt="ColonHaiCham" />
                      </div>
                      <div className="font-lato text-[18px] font-extrabold">
                        02
                      </div>
                    </div>
                    <div className="grid grid-cols-3 font-lato text-[12px] text-[#9D9D9D]">
                      <div>hour</div>
                      <div>min</div>
                      <div>sec</div>
                    </div>
                  </div>
                </div>
                <div className="row-span-4">
                  <img src={Sticker} alt="Sticker" />
                </div>

                <div className="row-span-4 px-10">
                  <div className="font-lato text-[16px] font-extrabold">
                    Sketchers
                  </div>
                  <div className="py-[6px] font-lato text-[12px]">
                    Sport-shoe 2102
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
                    <div className="pl-2 font-lato text-[12px]">(54)</div>
                  </div>
                  <div className="cardDown flex items-center pb-[15px]">
                    <div className="font-lato text-[14px] font-bold text-[#FF2E00]">
                      $80.00
                    </div>
                    <div className="pl-2 pr-2 font-lato text-[12px] text-[#555555]">
                      $129.99
                    </div>
                    <div className="inline-block bg-[#FF2E00]">
                      <div className="text- font-Inter text-[8px] font-semibold text-white">
                        - 40%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="2">
          <div>
            <div className="phan1 grid grid-cols-10 px-[90px]">
              <div className="col-span-9 w-full font-lato text-[28px] font-medium">
                Trending must-haves
              </div>
              <div className="flex items-center">
                <div className="pr-2 font-lato text-[12px]">View all</div>
                <div className="">
                  <img src={muiTenBag} alt="muiTenBag" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid px-[90px] pt-[30px] md:grid-rows-3 lg:flex">
            <div>
              <div>
                <div className="grid-rows-2 pr-2">
                  <div className="relative">
                    <img src={trendPhoto1} alt="trendPhoto1" />
                    <div className="absolute top-2 pl-2">
                      <div>
                        <div className="bg-green-400 py-1 pr-2">
                          <div className="flex">
                            <div className="icon pr-2">
                              <div>
                                <img src={iconButton} alt="iconButton" />
                              </div>
                            </div>
                            <div className="font-lato text-[10px]">
                              New Arivals
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-0 grid grid-cols-10 items-center bg-black text-white md:w-[407px] lg:w-max">
                    <div className="col-span-6 py-[7.5px] pl-2">
                      <div className="font-lato text-[16px] font-bold">
                        Cool & Sexy Calvin Klein
                      </div>
                      <div className="font-lato text-[14px]">
                        Dotted dress-Casual
                      </div>
                    </div>
                    <div className="col-span-4">
                      <div className="mr-3 grid grid-cols-3 rounded-md border-2 border-white p-1">
                        <div className="font-lato font-medium text-[14x]">
                          $89
                        </div>
                        <div className="col-span-2 col-start-2 font-lato font-bold text-[14x]">
                          Shop Now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="">
                <div className="pr-2">
                  <div className="relative">
                    <img src={trendPhoto2} alt="trendPhoto2" />

                    <div className="absolute top-2 pl-2">
                      <div>
                        <div className="bg-green-400 py-1 pr-2">
                          <div className="flex">
                            <div className="icon pr-2">
                              <div>
                                <img src={iconButton} alt="iconButton" />
                              </div>
                            </div>
                            <div className="font-lato text-[10px]">
                              New Arivals
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-0 grid grid-cols-10 items-center bg-black text-white md:w-[407px] lg:w-max">
                    <div className="col-span-6 py-[7.5px] pl-2">
                      <div className="font-lato text-[16px] font-bold">
                        Cool & Sexy Calvin Klein
                      </div>
                      <div className="font-lato text-[14px]">
                        Dotted dress-Casual
                      </div>
                    </div>
                    <div className="col-span-4">
                      <div className="mr-3 grid grid-cols-3 rounded-md border-2 border-white p-1">
                        <div className="font-lato font-medium text-[14x]">
                          $89
                        </div>
                        <div className="col-span-2 col-start-2 font-lato font-bold text-[14x]">
                          Shop Now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="w-full pr-2">
                  <div className="relative">
                    <img src={trendPhoto3} alt="trendPhoto3" />

                    <div className="absolute top-2 pl-2">
                      <div>
                        <div className="bg-green-400 py-1 pr-2">
                          <div className="flex">
                            <div className="icon pr-2">
                              <div>
                                <img src={iconButton} alt="iconButton" />
                              </div>
                            </div>
                            <div className="font-lato text-[10px]">
                              New Arivals
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bottom-0 grid grid-cols-10 items-center bg-black text-white md:w-[407px] lg:w-max">
                    <div className="col-span-6 py-[7.5px] pl-2">
                      <div className="font-lato text-[16px] font-bold">
                        Cool & Sexy Calvin Klein
                      </div>
                      <div className="font-lato text-[14px]">
                        Dotted dress-Casual
                      </div>
                    </div>
                    <div className="col-span-4">
                      <div className="mr-3 grid grid-cols-3 rounded-md border-2 border-white p-1">
                        <div className="font-lato font-medium text-[14x]">
                          $89
                        </div>
                        <div className="col-span-2 col-start-2 font-lato font-bold text-[14x]">
                          Shop Now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="3 w-full pt-5">
          <div className="phan1 grid grid-cols-10 px-[90px]">
            <div className="col-span-9 w-full font-lato text-[28px] font-medium">
              Top100
            </div>
            <div className="flex items-center">
              <div className="pr-2 font-lato text-[12px]">View all</div>
              <div className="">
                <img src={muiTenBag} alt="muiTenBag" />
              </div>
            </div>
          </div>

          <div className="Phan2 grid items-center px-16 pt-9 md:grid-cols-2 lg:grid-cols-4">
            <div className="o">
              <div className="pl-5">
                <div className="px-7 py-4">
                  <img src={blackGirl} alt="blackGirl" />
                </div>
              </div>
              <div className="pl-14">
                <div className="flex items-center">
                  <div>
                    <div className="pt-[15px] font-lato text-[12px] font-bold">
                      Mango
                    </div>
                    <div className="py-[6px] font-lato text-[10px]">
                      Kimono & Caftan - Black - Regular fit
                    </div>
                  </div>
                  <div className="pl-[32px]">
                    <img src={iconTim} alt="iconTim" />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="start flex pb-[6px]">
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
                    <div>
                      <img src={star} alt="star" />
                    </div>
                  </div>
                  <div className="pl-2 font-lato text-[12px]">(54)</div>
                </div>
                <div className="cardDown flex items-center pb-[15px]">
                  <div className="font-lato text-[14px] font-extrabold text-[#FF2E00]">
                    $228
                  </div>
                  <div className="pl-2 pr-2 font-lato text-[14px] text-[#555555]">
                    $290
                  </div>
                  <div className="font-Inter text-[12px] font-semibold text-[#FF2E00]">
                    -10%
                  </div>
                </div>
              </div>
            </div>

            <div className="o">
              <div className="pl-5">
                <div className="px-7 py-4">
                  <img src={aoxanh} alt="aoxanh" />
                </div>
              </div>
              <div className="pl-14">
                <div className="flex items-center">
                  <div>
                    <div className="pt-[15px] font-lato text-[12px] font-bold">
                      Zara
                    </div>
                    <div className="py-[6px] font-lato text-[10px]">
                      Midi top- Daily fit
                    </div>
                  </div>
                  <div className="pl-[32px]">
                    <img src={iconTim} alt="iconTim" />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="start flex pb-[6px]">
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
                    <div>
                      <img src={star} alt="star" />
                    </div>
                  </div>
                  <div className="pl-2 font-lato text-[12px]">(523)</div>
                </div>
                <div className="cardDown flex items-center pb-[15px]">
                  <div className="font-lato text-[14px] font-extrabold text-[#FF2E00]">
                    $95
                  </div>
                  <div className="pl-2 pr-2 font-lato text-[14px] text-[#555555]">
                    $145
                  </div>
                  <div className="font-Inter text-[12px] font-semibold text-[#FF2E00]">
                    -7%
                  </div>
                </div>
              </div>
            </div>

            <div className="o">
              <div className="pl-5">
                <div className="px-7 py-4">
                  <img src={aoden} alt="aoden" />
                </div>
              </div>
              <div className="pl-14">
                <div className="flex items-center">
                  <div>
                    <div className="pt-[15px] font-lato text-[12px] font-bold">
                      Uniqlo
                    </div>
                    <div className="py-[6px] font-lato text-[10px]">
                      Midi atlas Slim fit - bohemian
                    </div>
                  </div>
                  <div className="pl-[86px]">
                    <img src={iconTim} alt="iconTim" />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="start flex pb-[6px]">
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
                    <div>
                      <img src={star} alt="star" />
                    </div>
                  </div>
                  <div className="pl-2 font-lato text-[12px]">(54)</div>
                </div>
                <div className="cardDown flex items-center pb-[15px]">
                  <div className="font-lato text-[14px] font-extrabold text-[#FF2E00]">
                    $125
                  </div>
                  <div className="pl-2 pr-2 font-lato text-[14px] text-[#555555]">
                    $156
                  </div>
                  <div className="font-Inter text-[12px] font-semibold text-[#FF2E00]">
                    -8%
                  </div>
                </div>
              </div>
            </div>

            <div className="o">
              <div className="pl-5">
                <div className="px-7 py-4">
                  <img src={aoxanhrieu} alt="aoxanhrieu" />
                </div>
              </div>
              <div className="pl-14">
                <div className="flex items-center">
                  <div>
                    <div className="pt-[15px] font-lato text-[12px] font-bold">
                      Mango dress
                    </div>
                    <div className="py-[6px] font-lato text-[10px]">
                      Kimono & Caftan - Colorful - Night club fit
                    </div>
                  </div>
                  <div className="pl-[32px]">
                    <img src={iconTim} alt="iconTim" />
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="start flex pb-[6px]">
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
                    <div>
                      <img src={star} alt="star" />
                    </div>
                  </div>
                  <div className="pl-2 font-lato text-[12px]">(121)</div>
                </div>
                <div className="cardDown flex items-center pb-[15px]">
                  <div className="font-lato text-[14px] font-extrabold text-[#FF2E00]">
                    $365
                  </div>
                  <div className="pl-2 pr-2 font-lato text-[14px] text-[#555555]">
                    $487
                  </div>
                  <div className="font-Inter text-[12px] font-semibold text-[#FF2E00]">
                    -15%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="4 grid h-full grid-cols-2 items-center">
          <div className="grid grid-cols-2">
            <div className="bg-[#BF2E3B] text-white">
              <div className="px-[20px] font-lato">
                <div className="text-[36px] font-extrabold">
                  Never-Ending Summer
                </div>
                <div className="text-[28px]">
                  Throwback Shirts & all-day dressed
                </div>
              </div>
              <div className="pl-[20px] pt-3 font-lato text-[20px] underline">
                Exlore all category
              </div>
            </div>
            <div className="w-full">
              <img src={coGaiAoDo} alt="coGaiAoDo" />
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="bg-[#1D5159] text-white">
              <div className="px-[20px] font-lato">
                <div className="text-[36px] font-extrabold">
                  Never-Ending Summer
                </div>
                <div className="col-span-4 text-[28px]">
                  Throwback Shirts & all-day dressed
                </div>
              </div>
              <div className="pl-[20px] font-lato text-[20px] underline">
                Exlore all category
              </div>
            </div>
            <div className="w-full">
              <img src={coGaiAoTrang} alt="coGaiAoTrang" />
            </div>
          </div>
        </div>

        <div className="5 hidden h-fit items-center bg-[#F7DDD0] lg:grid lg:grid-cols-10">
          <div>
            <div className="px-20">
              <img src={reTrai} alt="reTrai" />
            </div>
          </div>
          <div className="col-span-4 pl-16">
            <div>MagSafe</div>
            <div>
              Snap on a magnetic case, wallet, or both. And get faster wireless
              charging.
            </div>
          </div>
          <div className="col-span-4 pl-16">
            <img src={iphone} alt="iphone" />
          </div>
          <div>
            <div className="px-20">
              <img src={rePhai} alt="rePhai" />
            </div>
          </div>
        </div>

        <div className="6 grid h-full grid-cols-2 items-center py-20">
          <div className="grid grid-cols-2">
            <div className="bg-[#D11FB5] text-white">
              <div className="px-[20px] font-lato">
                <div className="text-[36px] font-extrabold">
                  The Pinky Barbie Edition
                </div>
                <div className="text-[28px]">Lets play dress up</div>
              </div>
              <div className="pl-[20px] pt-3 font-lato text-[20px] underline">
                Exlore all category
              </div>
            </div>
            <div className="w-full">
              <img src={coGaiAoHong} alt="coGaiAoHong" />
            </div>
          </div>

          <div className="grid grid-cols-2">
            <div className="bg-[#0186C4] text-white">
              <div className="px-[20px] font-lato">
                <div className="text-[36px] font-extrabold">
                  Best Sellers Everyone Love
                </div>
                <div className="col-span-4 text-[28px]">
                  Poolside glam include
                </div>
              </div>
              <div className="pl-[20px] font-lato text-[20px] underline">
                Exlore all category
              </div>
            </div>
            <div className="w-full">
              <img src={coGaiAoXanh} alt="coGaiAoXanh" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frm;
