import { Progress } from "@nextui-org/react";
import React from 'react';

import star from "../image/frm/frm2/Star 2.png";
import StarNua from "../image/frm/ProductDetails/StarNua.png";
import like from "../image/frm/ProductDetails/like.png";
import disLike from "../image/frm/ProductDetails/disLike.png";
import Vertical from "../image/frm/ProductDetails/Vertical.png";
import pic1 from "../image/frm/ProductDetails/pic1.png";
import pic2 from "../image/frm/ProductDetails/pic2.png";
import pic3 from "../image/frm/ProductDetails/pic3.png";
import Horizontal from "../image/frm/frm2/Horizontal.png";
import StarEmty from "../image/frm/ProductDetails/StarEmty.png";
StarEmty;

const ratings = [
  { id: 1, stars: 5, ratingPercentage: 75 },
  { id: 2, stars: 4, ratingPercentage: 50 },
  { id: 5, stars: 3, ratingPercentage: 90 },
  { id: 3, stars: 2, ratingPercentage: 30 },
  { id: 4, stars: 1, ratingPercentage: 20 },

  // ... các đánh giá khác
];

const Reviews = () => {
  return (
    <div className="mt-5">
      <div className="mx-5 flex items-center justify-between mdd:mx-[300px] lgg:mx-[300px]">
        <div className="w-[205px] mdd:w-[107.5px] lgg:w-[332px]">
          <div className="font-lato text-[14px] font-bold">
            Total review rate
          </div>
          <div className="mt-5 font-lato text-[14px] text-[#555555]">
            Average rating (10 Reviews &125 Ratings)
          </div>
          <div className="mt-3 flex items-center">
            <div className="flex items-center">
              <div>
                <img className="h-6 w-6" src={star} alt="star" />
              </div>
              <div>
                <img className="h-6 w-6" src={star} alt="star" />
              </div>
              <div>
                <img className="h-6 w-6" src={star} alt="star" />
              </div>
              <div>
                <img className="h-6 w-6" src={star} alt="star" />
              </div>
              <div>
                <img className="flex h-8 w-7" src={StarNua} alt="StarNua" />
              </div>
            </div>
            <div className="ml-4 font-lato text-[14px] text-[#555555]">
              4.8/5
            </div>
          </div>
          <button className="mt-5 w-[185px] rounded-md border-2 px-[10px] py-[10px] font-lato text-[14px] font-bold">
            Write a customer review
          </button>
        </div>

        <div className="w-[205px] mdd:w-[107.5px] lgg:w-[332px]">
          {ratings.map((data) => (
            <div key={data.id} className="flex items-center justify-between">
              <div className="font-lato text-[14px]">{data.stars} Stars </div>

              <Progress
                value={data.ratingPercentage}
                className="mx-2 h-[5px] w-[245px]"
              />

              <div className="font-lato text-[14px]">
                {data.ratingPercentage}%
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-[43px]">
        <img className="h-[0.5px] w-full" src={Horizontal} alt="Horizontal" />
      </div>

      <div>
        <div className="mx-5 mt-5 mdd:mx-[90px] lgg:mx-[90px]">
          <div className="flex justify-between">
            <div className="flex">
              <div className="flex items-center">
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
              <div className="ml-[14.5px]">
                <div className="font-lato text-[14px] font-bold">
                  Its really amazing
                </div>
                <div className="font-lato text-[12px] text-[#9D9D9D]">
                  By Sara macknail
                </div>
              </div>
            </div>

            <div className="flex items-center rounded-md border-2 px-3 py-2">
              <div className="flex items-center">
                <div>
                  <img src={like} alt="like" />
                </div>
                <div className="font-lato text-[12px] font-bold">2</div>
              </div>
              <div className="mx-1">
                <img src={Vertical} alt="Vertical" />
              </div>
              <div className="flex items-center">
                <img src={disLike} alt="disLike" />

                <div className="font-lato text-[12px] font-bold">1</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-[20px] mt-[33px] mdd:mx-[90px] lgg:mx-[90px]">
          <div className="flex">
            <div className="h-5 w-[105px] font-lato text-[14px] text-[#9D9D9D]">
              Advantages
            </div>
            <div className="ml-8 font-lato text-[14px]">Color, Size</div>
          </div>

          <div className="my-4 flex">
            <div className="h-5 w-[105px] font-lato text-[14px] text-[#9D9D9D]">
              Disadvantages
            </div>
            <div className="ml-8 font-lato text-[14px]">-</div>
          </div>

          <div className="flex">
            <div className="h-5 w-[105px] font-lato text-[14px] text-[#9D9D9D]">
              Review
            </div>
            <div className="ml-8 w-[923px] font-lato text-[14px]">
              What sets 5 Star Cloth apart from other brands is their ability to
              create timeless pieces that never go out of style. Their designs
              are sophisticated and elegant, catering to individuals who
              appreciate refined fashion. Whether it's a formal event or a
              casual outing, their clothing effortlessly elevates any ensemble.
            </div>
          </div>

          <div className="mt-[34px] flex items-center">
            <img className="mr-2" src={pic1} alt="pic1" />
            <img src={pic2} alt="pic2" />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <img className="h-[0.5px] w-full" src={Horizontal} alt="Horizontal" />
      </div>

      <div>
        <div className="mx-[20px] mt-[20px] mdd:mx-[90px] lgg:mx-[90px]">
          <div className="flex justify-between">
            <div className="flex">
              <div className="flex items-center">
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
                  <img src={StarEmty} alt="sStarEmtytar" />
                </div>
              </div>
              <div className="ml-[14.5px]">
                <div className="font-lato text-[14px] font-bold">
                  I was satisfied but...
                </div>
                <div className="font-lato text-[12px] text-[#9D9D9D]">
                  By Mini rey
                </div>
              </div>
            </div>

            <div className="flex items-center rounded-md border-2 px-3 py-2">
              <div className="flex items-center">
                <div>
                  <img src={like} alt="like" />
                </div>
                <div className="font-lato text-[12px] font-bold">1</div>
              </div>
              <div className="mx-1">
                <img src={Vertical} alt="Vertical" />
              </div>
              <div className="flex items-center">
                <img src={disLike} alt="disLike" />

                <div className="font-lato text-[12px] font-bold">5</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-[20px] mt-[33px] mdd:mx-[90px] lgg:mx-[90px]">
          <div className="flex">
            <div className="h-5 w-[105px] font-lato text-[14px] text-[#9D9D9D]">
              Advantages
            </div>
            <div className="ml-8 font-lato text-[14px]">Size, style</div>
          </div>

          <div className="my-4 flex">
            <div className="h-5 w-[105px] font-lato text-[14px] text-[#9D9D9D]">
              Disadvantages
            </div>
            <div className="ml-8 font-lato text-[14px] text-[#4B5157]">
              The color was a little lighter than the photo
            </div>
          </div>

          <div className="flex">
            <div className="h-5 w-[105px] font-lato text-[14px] text-[#9D9D9D]">
              Review
            </div>
            <div className="ml-8 w-[923px] font-lato text-[14px]">
              The fabric used in this clothing line is of superior quality,
              providing a luxurious feel against the skin. It not only looks
              stunning but also feels incredibly comfortable to wear. The
              attention to detail in every stitch and seam is evident, making
              each piece a work of art.
            </div>
          </div>

          <div className="mt-[34px] flex items-center">
            <img src={pic3} alt="pic3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
