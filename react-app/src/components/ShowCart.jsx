import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import React from 'react';

import Header from "./Header";
import thungRac from "../image/frm/Cart/thungRac.png";
import Minus from "../image/frm/ProductDetails/Minus.png";
import blackPlus from "../image/frm/Cart/blackPlus.png";
import alert from "../image/frm/Cart/alert.png";
import Horizontal from "../image/frm/frm2/Horizontal.png";
import block from "../image/frm/Cart/block.png";
import leftright from "../image/frm/ProductDetails/leftright.png";

const ShowCart = () => {
  const [tong, setTong] = useState(0);

  const { cart, addToCart, removeFromCart, removeItem } =
    useContext(CartContext);

  const [loading, setLoading] = useState(true);

  //lấy nhiều sản phẩm
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const data = await fetchProducts(); // Gọi hàm fetchProducts
        setProducts(data); // Cập nhật danh sách sản phẩm
        setLoading(false);
      } catch (err) {
        setError(err.message); // Lưu thông báo lỗi nếu xảy ra
        setLoading(false);
      }
    };

    fetchProductList();
  }, []);

  if (error) return <p>Error: {error}</p>;

  if (loading) {
    return <p>Loading...</p>;
  }

  // Hàm tăng số lượng sản phẩm
  const increaseQuantity = (item) => {
    addToCart(item); // Tăng số lượng
  };

  // Hàm giảm số lượng sản phẩm hoặc xóa sản phẩm nếu số lượng là 1
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      removeFromCart(item); // Giảm số lượng nếu số lượng lớn hơn 1
    } else {
      removeFromCart(item); // Xóa sản phẩm nếu số lượng là 1
    }
  };

  //delete
  const deletee = (item) => {
    if (item.quantity > 0) {
      removeItem(item);
    }
  };
  // Tính tổng giá trị giỏ hàng
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <div>
        <Header cart={cart} />
      </div>

      <div className="mx-5 mt-10 block justify-between mdd:mx-[90px] mdd:flex lgg:mx-[90px] lgg:flex">
        <div className="h-fit w-[438px] lgg:h-fit lgg:w-[851px]">
          <div className="flex items-center">
            <div className="font-lato text-[20px] font-bold">Cart</div>
            <div className="ml-1 font-lato text-[18px] text-[#9D9D9D]">
              {(cart || []).length === 0 ? "0" : cart.length}
            </div>
          </div>

          <div className="mt-8">
            {cart.length === 0 ? (
              <p>Giỏ trống! </p>
            ) : (
              <div className="">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="mt-8 items-center mdd:mt-8 mdd:block mdd:h-[126px] lgg:mt-6 lgg:flex lgg:h-[70px]"
                  >
                    <div className="flex w-[427px] items-center justify-between mdd:h-10 lgg:h-[70px]">
                      <div className="flex w-[282px] items-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="mr-4 h-16 w-16"
                        />

                        <div>
                          <h3 className="font-lato text-[14px] font-bold">
                            {item.title.slice(0, 20)},
                          </h3>

                          <div className="flex items-center">
                            <div className="mr-1 font-lato text-[14px] text-[#555555]">
                              Color:
                            </div>
                            <div className="border-9 h-[12px] w-[12px] rounded-full border bg-yellow-400"></div>
                          </div>
                        </div>
                      </div>

                      <div className="w-[60px] font-lato text-[14px] text-[#555555]">
                        ${item.price.toFixed(2)}
                      </div>
                    </div>

                    <div className="mx-0 mt-4 flex h-10 w-[424px] items-center justify-between mdd:mx-0 mdd:mt-4 mdd:h-[40px] lgg:ml-20 lgg:mt-0 lgg:h-[70px]">
                      <div className="flex items-center space-x-2 rounded-md border-2 px-[10px] py-[6px]">
                        <button
                          className="text-[22px] text-[#C4C4C4]"
                          onClick={() => decreaseQuantity(item)} // Giảm số lượng
                        >
                          <img src={Minus} alt="Minus" />
                        </button>
                        <p className="font-lato text-[14px] font-bold">
                          {item.quantity}
                        </p>
                        <button
                          className="text-[22px] text-[#C4C4C4]"
                          onClick={() => increaseQuantity(item)} // Tăng số lượng
                        >
                          <img src={blackPlus} alt="blackPlus" />
                        </button>
                      </div>

                      <div className="w-[60px]">
                        {(item.quantity * item.price).toFixed(2)}
                      </div>
                      <button onClick={() => deletee(item)}>
                        <img src={thungRac} alt="thungRac" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-[62px] h-[389px] items-center bg-[#E9E9E9] px-[64.5px] mdd:mt-0 mdd:h-[389px] mdd:w-[309px] mdd:px-0 lgg:mt-0 lgg:h-[409px] lgg:w-[309px] lgg:px-0">
          <div className="mdd:[228px] lgg:[229px] mx-10 w-[229px] pt-5">
            <div className="font-lato text-[16px] font-bold">Order Summary</div>
            <div className="mt-3 flex items-center justify-between font-lato text-[14px] text-[#555555]">
              <div>Price</div>
              <div> $ {total.toFixed(2)}</div>
            </div>

            <div className="mt-4 flex items-center justify-between font-lato text-[14px] text-[#555555]">
              <div>Shipping</div>
              <div> $0</div>
            </div>

            <div className="mt-4 flex items-center justify-between font-lato text-[14px] text-[#555555]">
              <div>Tax</div>
              <div> $0</div>
            </div>

            <div className="mt-4">
              <div className="font-lato text-[14px] text-[#555555]">
                Discount Price
              </div>
              <div className="mt-1 flex items-center">
                <div>
                  <img src={alert} alt="alert" />
                </div>
                <div className="font-lato text-[12px] text-[#FF2E00]">
                  You must log in to use the discount code
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  onChange={() => setTong(!tong)}
                  type="checkbox"
                  className="h-5 w-5"
                />

                <div className="ml-1">Pack in a Gift Box</div>
              </div>
              <div>$10.90</div>
            </div>

            <div>
              <img
                className="mt-3 w-[229px]"
                src={Horizontal}
                alt="Horizontal"
              />
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="font-lato text-[14px] font-bold">Total Price</div>
              <div className="font-lato text-[14px] font-bold">
                ${tong ? (total + 10.9).toFixed(2) : total.toFixed(2)}
              </div>
            </div>

            <button className="mt-7 flex w-[229px] items-center justify-center rounded-md bg-[#434343] px-8 py-4">
              <div>
                <img src={block} alt="block" />
              </div>
              <div className="ml-1 font-lato text-[14px] font-medium uppercase text-white">
                Checkout
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="mx-5 mt-6 flex h-[48px] items-center justify-between mdd:mx-[90px] mdd:justify-end lgg:mx-[90px] lgg:justify-end">
        <div className="h-[48px] w-[219px] rounded-md border-2 pt-4 text-center font-lato text-[12px] font-semibold mdd:w-[197px] lgg:w-[197px]">
          Enter coupon code
        </div>
        <Link
          to="/Login"
          className="h-[48px] w-[219px] rounded-md bg-black pt-2 text-center font-lato text-[12px] font-semibold text-white mdd:w-[111px] lgg:w-[111px]"
        >
          Login and Apply code
        </Link>
      </div>

      <div className="">
        <div className="mx-5 mt-6 flex items-center justify-between mdd:mx-[90px] lgg:mx-[90px]">
          <p className="font-lato text-[14px] font-bold">You might also like</p>
          <div>
            <img src={leftright} alt="leftright" />
          </div>
        </div>

        <div className="mx-5 mt-3 grid grid-cols-1 mdd:mx-[90px] mdd:grid mdd:grid-cols-2 mdd:gap-x-52 lgg:mx-[90px] lgg:grid lgg:grid-cols-4 lgg:gap-x-0">
          {[
            ...new Set(cart.map((item) => item.category)), // Lấy danh sách category duy nhất từ cart
          ].map(
            (category) =>
              products &&
              products
                .filter((data) => data.category === category)
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
                        className="flex items-center gap-3 rounded-md border-2 px-[25.5px] py-2"
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
                )),
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowCart;
