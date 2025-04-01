
import PropTypes from "prop-types";
import React from 'react';

const YourMight = ({ products, product, addToCart }) => {
  return (
    <div className="">
      <div className="mx-5 mt-3 grid grid-cols-1 mdd:mx-[90px] mdd:grid mdd:grid-cols-2 mdd:gap-x-52 lgg:mx-[90px] lgg:grid lgg:grid-cols-4 lgg:gap-x-0">
        {products
          .filter((data) => data.category === product.category)
          .map((data) => (
            <div key={data.id} className="flex items-center">
              <div>
                <img
                  className="h-[119px] w-[86px]"
                  src={data.image}
                  alt={data.title}
                />
              </div>
              <div className="my-[9.5px] ml-3">
                <div className="font-lato text-[14px] uppercase">
                  {data.category}
                </div>
                <div className="flex items-center justify-between">
                  <div className="font-lato text-[14px] font-bold text-[#FF2E00]">
                    $ 69.99
                  </div>
                  <div className="my-3 font-lato text-[12px] text-[#555555]">
                    $129.99
                  </div>
                  <div className="bg-[#FF2E00] font-Inter text-[8px] font-semibold text-white">
                    - 40%
                  </div>
                </div>
                <button
                  onClick={() => {
                    addToCart(data);
                  }}
                  className="flex items-center gap-3 rounded-md border-2 px-[25.5px] py-2 active:text-gray-300 duration-2500 ease-in-out"
                >
                  <div className="font-lato text-[14px] text-[#555555]">
                    ${data.price}
                  </div>
                  <div className="font-lato text-[14px] font-bold">
                    Add to cart
                  </div>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

YourMight.propTypes = {
  addToCart: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  category: PropTypes.string.isRequired,
  product: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default YourMight;
