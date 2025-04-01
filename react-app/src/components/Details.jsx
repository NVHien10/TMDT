import Ellipse from "../image/frm/ProductDetails/Ellipse.png";
import Layer_3 from "../image/frm/ProductDetails/Layer_3.png";
import clothes from "../image/frm/ProductDetails/clothes.png";
import iron from "../image/frm/ProductDetails/iron.png";
import laundry from "../image/frm/ProductDetails/laundry.png";
import Layer3 from "../image/frm/ProductDetails/Layer3.png";
import test from "../image/frm/ProductDetails/026test.png";
import muiTenLen from "../image/frm/ProductDetails/muiTenLen.png";
import Horizontal from "../image/frm/frm2/Horizontal.png";
import React from 'react';

const Details = () => {
  return (
    <div className="mx-5 mt-5 grid grid-cols-2 gap-5 mdd:mx-[90px] lgg:mx-[90px]">
      <div>
        <div>
          <h2 className="font-lato text-[16px] font-bold">
            Product Description
          </h2>
          <p className="font-lato text-[14px] text-[#555555]">
            Short dress with a plunging V-neckline and tie detail. Wide sleeves
            falling below the elbow. Contrast bead details. Invisible back zip
            fastening
          </p>
        </div>
        <div>
          <h2 className="font-lato text-[16px] font-bold">
            Product Description
          </h2>
          <ul className="font-lato text-[14px] text-[#555555]">
            <div className="flex items-center">
              <img src={Ellipse} className="mr-1" alt="Ellipse " />
              <li>Length | Regular</li>
            </div>
            <div className="flex items-center">
              <img src={Ellipse} className="mr-1" alt="Ellipse " />
              <li>Pattern | Floral</li>
            </div>
            <div className="flex items-center">
              <img src={Ellipse} className="mr-1" alt="Ellipse " />
              <li>Size | 38</li>
            </div>
            <div className="flex items-center">
              <img src={Ellipse} className="mr-1" alt="Ellipse " />
              <li>Fit | Regular fit</li>
            </div>
            <div className="flex items-center">
              <img src={Ellipse} className="mr-1" alt="Ellipse " />
              <li>Age group | Adult</li>
            </div>
            <div className="flex items-center">
              <img src={Ellipse} className="mr-1" alt="Ellipse " />
              <li>Leg opening | Wide leg</li>
            </div>
            <div className="flex items-center">
              <img src={Ellipse} className="mr-1" alt="Ellipse " />
              <li>Sleeve length | Long sleeve</li>
            </div>
            <div className="flex items-center">
              <img src={Ellipse} className="mr-1" alt="Ellipse " />
              <li>Package contents | 2 pcs</li>
            </div>
          </ul>
        </div>
      </div>

      <div className="ml-5 mdd:ml-0 lgg:ml-0">
        <div>
          <h2 className="font-lato text-[16px] font-bold">Composition</h2>
          <p className="font-lato text-[14px] text-[#555555]">
            We work with monitoring programmes to ensure compliance with our
            social, environmental and health and safety standards for our
            products. To assess compliance, we have developed a programme of
            audits and continuous improvement plans. OUTER SHELL 90% cotton10%
            linen
          </p>
        </div>

        <div>
          <h2 className="font-lato text-[16px] font-bold">Care instructions</h2>
          <div className="flex items-center">
            <div className="ml-2">
              <img src={Layer_3} alt="Layer_3" />
            </div>
            <div className="font-lato text-[14px] text-[#555555]">
              Machine wash at max. 30ºC/86ºF with short spin cycle
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-2">
              <img src={clothes} alt="clothes" />
            </div>
            <div className="font-lato text-[14px] text-[#555555]">
              Machine wash at max. 30ºC/86ºF with short spin cycle
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-2">
              <img src={iron} alt="iron" />
            </div>
            <div className="font-lato text-[14px] text-[#555555]">
              Machine wash at max. 30ºC/86ºF with short spin cycle
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-2">
              <img src={laundry} alt="laundry" />
            </div>
            <div className="font-lato text-[14px] text-[#555555]">
              Machine wash at max. 30ºC/86ºF with short spin cycle
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-2">
              <img src={Layer3} alt="Layer3" />
            </div>
            <div className="font-lato text-[14px] text-[#555555]">
              Machine wash at max. 30ºC/86ºF with short spin cycle
            </div>
          </div>
          <div className="flex items-center">
            <div className="ml-2">
              <img src={test} alt="test" />
            </div>
            <div className="font-lato text-[14px] text-[#555555]">
              Machine wash at max. 30ºC/86ºF with short spin cycle
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[18px] flex items-center justify-between w-[438px] mdd:w-[844px] lgg:w-[1260px]">
        <div>
          <img
            className="h-[1px] w-[571px]"
            src={Horizontal}
            alt="Horizontal"
          />
        </div>
        <div className="flex items-center">
          <div className="mr-1">
            <img src={muiTenLen} alt="muiTenLen" />
          </div>
          <div className="font-lato text-[14px] font-medium uppercase">
            Show less
          </div>
        </div>
        <div>
          <img
            className="h-[1px] w-[571px]"
            src={Horizontal}
            alt="Horizontal"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;
