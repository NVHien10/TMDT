import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById, fetchProducts } from "../services/api";
import { Size, Color } from "./CategoryShow";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import Header from "./Header";
import Footer from "./Footer";
import YourMight from "./YourMight";
import Details from "./Details";
import Reviews from "./Reviews";
import Shipping from "./Shipping";
import React from 'react';

import muitenphai from "../image/header/MuiTenPhai.png";
import disabled from "../image/frm/ProductDetails/disabled.png";
import Minus from "../image/frm/ProductDetails/Minus.png";
import Plus from "../image/frm/ProductDetails/Plus.png";
import Pluss from "../image/frm/ProductDetails/Pluss.png";
import Check from "../image/frm/frm2/Check.png";
import iconMuiTem from "../image/header/Arrow.png";
import Horizontal from "../image/frm/frm2/Horizontal.png";
import blackCart from "../image/frm/ProductDetails/1.png";

import leftright from "../image/frm/ProductDetails/leftright.png";

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("details");
  //noi dung tab
  const renderTab = () => {
    switch (activeTab) {
      case "details":
        return <Details />;
      case "reviews":
        return <Reviews />;
      case "shipping":
        return <Shipping />;
      default:
        return null;
    }
  };

  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  // Tăng số lượng
  const increaseQuantity = (item) => {
    addToCart(item);
  };
  // Hàm giảm số lượng sản phẩm hoặc xóa sản phẩm nếu số lượng là 1
  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      removeFromCart(item); // Giảm số lượng nếu số lượng lớn hơn 1
    }
  };

  const firstItemPrice = cart
    .slice(0, 1)
    .reduce((acc, item) => acc + item.price * item.quantity, 0);

  const [hoverColor, setHoverColor] = useState("");
  const [tick, setTick] = useState(false);
  const toggleTick = (id) => {
    setTick((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const [bgSize, setBgSize] = useState(false);
  const toggleBgSize = (id) => {
    setBgSize((prev) => ({
      ...prev, // Sao chép trạng thái cũ
      [id]: !prev[id], // Đảo trạng thái của id hiện tại
    }));
  };

  // Lấy 1 sản phẩm theo id từ URL

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProduct();
  }, [id]);

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

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="product-details">
      <Header cart={cart} />

      <div className="mx-[90px] hidden h-[68px] items-center font-lato text-[14px] mdd:flex lgg:flex">
        <div>Homepage</div>
        <img
          src={muitenphai}
          className="mx-1 h-[5.33px] w-[8px]"
          alt="muitenphai"
        />
        <div>Women</div>
        <img
          src={muitenphai}
          className="mx-1 h-[5.33px] w-[8px]"
          alt="muitenphai"
        />
        <div>Clothes</div>
        <img
          src={muitenphai}
          className="mx-1 h-[5.33px] w-[8px]"
          alt="muitenphai"
        />
        <div>{product.title}</div>
      </div>

      <div className="mx-0 block h-[1145px] w-[478px] mdd:mx-[90px] mdd:flex mdd:h-[661px] mdd:w-[811px] lgg:mx-[90px] lgg:flex lgg:h-[661px] lgg:w-[1260px]">
        <div className="flex h-[741px] w-[478px] flex-col mdd:h-[661px] mdd:flex-row lgg:h-[661px] lgg:w-[1260px] lgg:flex-row">
          <div className="order-2 mx-5 mr-1 flex w-[478px] mdd:order-1 mdd:mx-0 mdd:block mdd:w-fit lgg:order-1 lgg:mx-0 lgg:block lgg:w-fit">
            <div>
              <img
                className="h-[154px] w-[84.4px] mdd:h-[138px] mdd:w-[122px] lgg:h-[138px] lgg:w-[122px]"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div>
              <img
                className="h-[154px] w-[84.4px] mdd:h-[138px] mdd:w-[122px] lgg:h-[138px] lgg:w-[122px]"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div>
              <img
                className="h-[154px] w-[84.4px] mdd:h-[138px] mdd:w-[122px] lgg:h-[138px] lgg:w-[122px]"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div>
              <img
                className="h-[154px] w-[84.4px] mdd:h-[138px] mdd:w-[122px] lgg:h-[138px] lgg:w-[122px]"
                src={product.image}
                alt={product.title}
              />
            </div>
            <div>
              <img
                className="h-[154px] w-[84.4px] mdd:h-[138px] mdd:w-[122px] lgg:h-[138px] lgg:w-[122px]"
                src={product.image}
                alt={product.title}
              />
            </div>
          </div>

          <div className="order-1 flex h-[579px] w-[478px] mdd:order-2 mdd:h-[661px] mdd:w-[279.5px] lgg:order-2 lgg:h-[661px] lgg:w-[504px]">
            <img src={product.image} alt={product.title} />
          </div>
        </div>

        <div className="ml-[60px] h-[395px] mdd:h-[661px] mdd:w-[405.5px] lgg:h-[661px] lgg:w-[630px]">
          <div className="mt-[58px] flex items-center justify-between mdd:w-[345.5px] lgg:w-[570px]">
            <div>
              <div className="font-lato text-[22px] font-extrabold uppercase">
                {product.category}
              </div>
              <div className="font-lato text-[20px] font-medium">
                ${product.price}
              </div>
            </div>

            <div className="h-[40px] w-[40px]">
              <img src={disabled} alt="disabled" />
            </div>
          </div>

          <div className="mt-[32px] h-[240px] mdd:w-[345.5px] lgg:w-[570px]">
            <div className="flex">
              <div className="w-[79px] font-lato text-[16px]">Size</div>
              <div>
                <div className="flex">
                  {Size.slice(0, 5).map((data) => (
                    <div
                      key={data.id}
                      className="relative cursor-pointer"
                      onClick={() => toggleBgSize(data.id)}
                    >
                      <div
                        className={`mr-[12px] border text-center font-lato text-[14px] font-bold ${bgSize[data.id] ? "bg-[#D1E2EB]" : null} `}
                      >
                        <button className="mx-[16px]">{data.name}</button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="font-lato text-[12px] text-[#FF7A00]">
                  Size guideline
                </div>
              </div>
            </div>

            <div className="mt-[20px] flex items-center">
              <div className="w-[79px] font-lato text-[16px]">Color</div>
              <div>
                <div className="flex w-[89px]">
                  {Color.slice(0, 4).map((data) => (
                    <div
                      key={data.id}
                      className="relative mr-[12px] cursor-pointer"
                    >
                      <div
                        className="border-9 h-[13px] w-[13px] rounded-full border"
                        style={{ backgroundColor: data.value }}
                        onMouseEnter={() => setHoverColor(data.id)}
                        onMouseLeave={() => setHoverColor(null)}
                        onClick={() => toggleTick(data.id)}
                      ></div>
                      {hoverColor === data.id && (
                        <div className="absolute -top-2 bg-black px-[10px] font-lato text-[14px] font-bold text-white">
                          {data.name}
                        </div>
                      )}
                      {tick[data.id] ? (
                        <div className="absolute bottom-2 left-[6px]">
                          <img src={Check} alt="Check" />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center">
              <div className="w-[79px] font-lato text-[16px]">Shipping</div>
              <div>
                <div className="flex items-center">
                  <div className="font-lato text-[14px] font-medium">
                    Free Shipping to Victoria teritory
                  </div>
                  <div>
                    <img src={iconMuiTem} alt="iconMuiTem" />
                  </div>
                </div>

                <div className="font-lato text-[12px] text-[#9D9D9D]">
                  Delivery Time: 14–17 days
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center">
              <div className="w-[79px] font-lato text-[16px]">Quantity</div>

              <div className="flex items-center">
                <div>
                  {cart.length === 0 ? (
                    <p>0</p> // Nếu giỏ hàng rỗng, hiển thị 0
                  ) : (
                    <div className="space-y-4">
                      <div
                        key={cart[0].id} // Sản phẩm đầu tiên
                        className="flex items-center rounded-md border-2"
                      >
                        <div className="mx-[10px] my-[10px] flex h-5 items-center gap-[10px]">
                          <button
                            className="text-[22px] text-[#C4C4C4]"
                            onClick={() => decreaseQuantity(cart[0])}
                          >
                            <img src={Minus} alt="Minus" />
                          </button>

                          <div className="font-lato text-[14px] font-bold">
                            {cart[0].quantity}
                          </div>

                          <button
                            className="text-[22px] text-[#C4C4C4]"
                            onClick={() => increaseQuantity(cart[0])}
                          >
                            <img src={Plus} alt="Plus" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="ml-5 font-lato text-[14px] font-bold">
                  50 available / 104 sold
                </div>
              </div>
            </div>
          </div>

          <div className="hidden h-[179px] mdd:block mdd:w-[345.5px] lgg:block lgg:w-[570px]">
            <div className="bg-[#E9E9E9] pl-6">
              <div className="pt-3 font-lato text-[18px] font-bold">
                $ {firstItemPrice.toFixed(2)}
              </div>
              <div>
                <img
                  className="mdd:[279.5px] ml-6 mt-2 flex lgg:w-[522px]"
                  src={Horizontal}
                  alt="Horizontal"
                />
              </div>
              <div className="mt-2 flex items-center pb-3">
                <div className="mr-[2px]">
                  <img src={Pluss} alt="Pluss" />
                </div>
                <div className="font-lato text-[10px]">
                  Add shipping insurance for $9( declared value only if the
                  package gets lost, stolen or damaged.)
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between mdd:w-[345.5px] lgg:w-[570px]">
              <div className="text-center">
                <button className="h-[56px] rounded bg-[#4172DC] font-lato text-[14px] uppercase text-white hover:bg-blue-700 mdd:w-[162.75px] mdd:px-[42.37px] mdd:py-[18px] lgg:w-[275px] lgg:px-14 lgg:py-2">
                  shop now
                </button>
              </div>
              <div className="flex h-[56px] items-center rounded border-2 mdd:w-[162.75px] lgg:w-[275px]">
                <div className="mdd:ml-[10.8px] lgg:ml-[67px] lgg:mr-[2px]">
                  <img src={blackCart} className="h-6 w-6" alt="blackCart" />
                </div>

                <div>
                  <button
                    onClick={() => {
                      addToCart(product);
                    }}
                    className="py-2 font-lato text-[14px] uppercase text-black"
                  >
                    Add to basket
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="mx-5 flex h-5 w-[438px] items-center justify-between mdd:mx-0 mdd:ml-[242px] mdd:w-[507px] lgg:mx-0 lgg:ml-[466.5px] lgg:w-[507px]">
          <button
            className={activeTab === "details" ? "active font-bold" : ""}
            onClick={() => setActiveTab("details")}
          >
            Product details
          </button>
          <button
            className={activeTab === "reviews" ? "active font-bold" : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (5)
          </button>
          <button
            className={activeTab === "shipping" ? "active font-bold" : ""}
            onClick={() => setActiveTab("shipping")}
          >
            Shipping & Payment
          </button>
        </div>
        <div>
          <img
            className="mx-5 mt-4 flex h-[0.5px] w-[438px] mdd:mx-[90px] mdd:w-[844px] lgg:mx-[90px] lgg:w-[1260px]"
            src={Horizontal}
            alt="Horizontal"
          />
        </div>
        <div>{renderTab()}</div>
      </div>

      <div className="mx-5 mt-5 block h-[200px] w-[438px] mdd:hidden lgg:hidden">
        <div className="bg-[#E9E9E9] pl-6">
          <div className="pt-3 font-lato text-[18px] font-bold">
            $ {firstItemPrice.toFixed(2)}
          </div>
          <div>
            <img
              className="mdd:[279.5px] ml-6 mt-2 flex lgg:w-[522px]"
              src={Horizontal}
              alt="Horizontal"
            />
          </div>
          <div className="mt-2 flex items-center pb-3">
            <div className="mr-[2px]">
              <img src={Pluss} alt="Pluss" />
            </div>
            <div className="font-lato text-[10px]">
              Add shipping insurance for $9( declared value only if the package
              gets lost, stolen or damaged.)
            </div>
          </div>
        </div>

        <div className="mt-8 flex w-[438px] items-center justify-between mdd:w-[345.5px] lgg:w-[570px]">
          <div className="text-center">
            <button className="h-[56px] w-[209px] rounded bg-[#4172DC] font-lato text-[14px] uppercase text-white hover:bg-blue-700 mdd:w-[162.75px] mdd:px-[42.37px] mdd:py-[18px] lgg:w-[275px] lgg:px-14 lgg:py-2">
              shop now
            </button>
          </div>
          <div className="flex h-[56px] w-[209px] items-center rounded border-2 mdd:w-[162.75px] lgg:w-[275px]">
            <div className="ml-[34px] mdd:ml-[10.8px] lgg:ml-[67px] lgg:mr-[2px]">
              <img src={blackCart} className="h-6 w-6" alt="blackCart" />
            </div>

            <div>
              <button
                onClick={() => {
                  addToCart(product);
                }}
                className="py-2 font-lato text-[14px] uppercase text-black"
              >
                Add to basket
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-5 mt-6 flex items-center justify-between mdd:mx-[90px] lgg:mx-[90px]">
        <p className="font-lato text-[14px] font-bold">You might also like</p>
        <div>
          <img src={leftright} alt="leftright" />
        </div>
      </div>

      <div>
        <YourMight
          product={product}
          products={products}
          addToCart={addToCart}
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetails;
