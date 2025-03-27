import { useState, useEffect, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { fetchProducts } from "../services/api";
import { CartContext } from "../context/CartContext";

import PropTypes from "prop-types";
import Header from "./Header";
import star from "../image/frm/frm2/Star 2.png";
import iconTim from "../image/frm/frm2/VectorTim.png";
import iconTimDo from "../image/frm/frm2/timdo.png";

import muitenphai from "../image/header/MuiTenPhai.png";
import muitenxuong from "../image/header/muitenxuong.png";

import AllCategory from "./AllCategory";

export const Color = [
  { id: 1, name: "Red", value: "#FF2E00" },
  { id: 2, name: "Green", value: "#4BCB88" },
  { id: 3, name: "Blue", value: "#00A5CF" },
  { id: 4, name: "Yellow", value: "#FFD36C" },
  { id: 5, name: "Purple", value: "#800080" },
  { id: 6, name: "Cyan", value: "#00FFFF" },
  { id: 7, name: "Orange", value: "#FF9D41" },
  { id: 8, name: "Pink", value: "#FF67DE" },
  { id: 9, name: "Brown", value: "#A52A2A" },
  { id: 10, name: "Gray", value: "#BCBFC2" },
  { id: 11, name: "Lime", value: "#00FF40" },
  { id: 12, name: "White", value: "#FFFFFF" },
];
export const Size = [
  { id: 1, name: "2XS" },
  { id: 2, name: "XS" },
  { id: 3, name: "S" },
  { id: 4, name: "M" },
  { id: 5, name: "L" },
  { id: 6, name: "XL" },
  { id: 7, name: "2XL" },
  { id: 8, name: "3XL" },
];

const CategoryShow = () => {
  const [tim, setTim] = useState(false);
  const toggleTim = (id) => {
    setTim((prevTim) => ({
      ...prevTim, // Sao chép trạng thái cũ
      [id]: !prevTim[id], // Đảo trạng thái của id hiện tại
    }));
  };

  const [products, setProducts] = useState([]);
  const [CategoryFilter, setCategoryFilter] = useState("");
  const { addToCart } = useContext(CartContext);
  const loadProducts = useCallback(async () => {
    try {
      const data = await fetchProducts(CategoryFilter);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching Products:", error);
    }
  }, [CategoryFilter]);
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const [allCategoryClick, setAllCategoryClick] = useState(true);
  const toggleAllCategoryClick = () => {
    setAllCategoryClick(!allCategoryClick);
    console(console.log("55"));
  };

  return (
    <div>
      <Header />

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
      </div>

      <div className="hidden h-[89px] w-[478pxp] items-center justify-between bg-[#E9E9E9] px-[90px] mdd:flex mdd:w-[991px] lgg:flex lgg:w-[1440px]">
        <div className="flex items-center">
          <div className="font-lato text-[20px] font-medium text-[#262626]">
            Women
          </div>
          <div className="ml-[32px] font-lato text-[16px]">110 items</div>
        </div>

        <div className="flex items-center rounded-md border border-gray-500 p-2">
          <button className="font-lato text-[14px] text-[#555555]">
            Sort by order
          </button>
          <img className="ml-1" src={muitenxuong} alt="" />
        </div>
      </div>

      <div className="flex mdd:w-[991px] lgg:w-[1440px]">
        <div
          className={`absolute bg-white mdd:static mdd:h-fit lgg:static lgg:h-fit ${allCategoryClick ? "top-0" : "top-40"}`}
        >
          <AllCategory
            toggleAllCategoryClick={toggleAllCategoryClick}
            allCategoryClick={allCategoryClick}
          />
        </div>

        <div className="mt-5 mdd:w-[631px] lgg:w-[1080px]">
          <div className="mx-[20px] mt-[24px] grid w-[438px] grid-cols-1 items-center overflow-x-scroll mdd:mx-[88px] mdd:mt-[48px] mdd:grid mdd:w-[455px] mdd:grid-cols-1 lgg:mx-[88px] lgg:mt-[48px] lgg:grid lgg:w-[904px] lgg:grid-cols-3 lgg:gap-5">
            {products.map((product) => (
              <ProductItem
                className="mb-3 mr-[0px] h-[480px] w-[260px] rounded-lg border-2 shadow-sm mdd:mr-0 mdd:h-[480px] mdd:w-[455px] lgg:mr-[0px] lgg:h-[480px] lgg:w-[288px]"
                key={product.id}
                product={product}
                addToCart={addToCart}
                toggleTim={toggleTim}
                tim={tim}
              />
            ))}
          </div>

          {/* <div className="container mx-auto mt-10 p-4">
            <Link
              to="/ProductList "
              className="mr-4 text-blue-500 hover:underline"
            >
              Product List
            </Link>
            <Link to="/cart" className="text-blue-500 hover:underline">
              Cart
            </Link>
          </div>
          <div>
            <CategoryList setCategoryFilter={setCategoryFilter} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

const ProductItem = ({ product, addToCart, tim, toggleTim }) => (
  <div key={product.id}>
    <Link
      to={`/ProductDetails/${product.id} `}
      className="h-[327px] w-[250px] mdd:h-[327px] mdd:w-[455px] lgg:h-[327px] lgg:w-[288px]"
    >
      <img
        src={product.image}
        alt="blackGirl"
        onClick={() => addToCart(product)}
        className="mx-[89px] mt-5 flex h-[327px] w-[260px] mdd:mx-0 mdd:mt-0 mdd:h-[327px] mdd:w-[450px] lgg:mx-0 lgg:mt-0 lgg:h-[327px] lgg:w-[277px]"
      />
    </Link>

    <div className="mx-[89px] h-fit w-[260px] mdd:mx-0 mdd:h-fit mdd:w-[450px] lgg:mx-0 lgg:h-fit lgg:w-[288px]">
      <div className="mx-[20px] mt-[20px] flex items-center justify-between mdd:mx-[20px] mdd:mt-[20px] lgg:mx-[20px] lgg:mt-[20px]">
        <div className="h-[44px] mdd:h-[44px] lgg:h-[44px]">
          <div className="font-lato text-[12px] font-bold">
            {product.title.slice(0, 35)}
          </div>
          <div className="pt-0 font-lato text-[10px] mdd:pt-[4px] lgg:pt-[4px]">
            {product.category}
          </div>
        </div>
        <div onClick={() => toggleTim(product.id)} className="cursor-pointer">
          {tim[product.id] ? (
            <img src={iconTimDo} alt="iconTimDo" />
          ) : (
            <img src={iconTim} alt="iconTim" />
          )}
        </div>
      </div>
      <div className="mx-[20px] my-[12px] flex h-0 items-center mdd:mx-[20px] mdd:my-[12px] mdd:h-[25px] lgg:mx-[20px] lgg:h-[24px] lgg:py-[12px]">
        <div className="start flex lgg:h-[24px] lgg:w-[120px]">
          <div>
            <img
              className="h-[16.5px] w-[16.5px] mdd:h-[24px] mdd:w-[24px] lgg:h-[24px] lgg:w-[24px]"
              src={star}
              alt="star"
            />
          </div>
          <div>
            <img
              className="h-[16.5px] w-[16.5px] mdd:h-[24px] mdd:w-[24px] lgg:h-[24px] lgg:w-[24px]"
              src={star}
              alt="star"
            />
          </div>
          <div>
            <img
              className="h-[16.5px] w-[16.5px] mdd:h-[24px] mdd:w-[24px] lgg:h-[24px] lgg:w-[24px]"
              src={star}
              alt="star"
            />
          </div>
          <div>
            <img
              className="h-[16.5px] w-[16.5px] mdd:h-[24px] mdd:w-[24px] lgg:h-[24px] lgg:w-[24px]"
              src={star}
              alt="star"
            />
          </div>
          <div>
            <img
              className="h-[16.5px] w-[16.5px] mdd:h-[24px] mdd:w-[24px] lgg:h-[24px] lgg:w-[24px]"
              src={star}
              alt="star"
            />
          </div>
        </div>
        <div className="h-[20px] w-[28px] pl-2 font-lato text-[12px]">
          ({product.price})
        </div>
      </div>

      <div className="cardDown mx-[20px] mb-[20px] flex items-center mdd:mx-[20px] mdd:mb-[20px] lgg:mx-[20px] lgg:mb-[20px]">
        <div className="font-lato text-[14px] font-extrabold text-[#FF2E00]">
          ${product.price}
        </div>
        <div className="pl-2 pr-2 font-lato text-[14px] text-[#555555]">
          $20
        </div>
        <div className="font-Inter text-[12px] font-semibold text-[#FF2E00]">
          -40%
        </div>
      </div>
    </div>
  </div>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired, // Add validation for image
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    tim: PropTypes.bool.isRequired, // Kiểu dữ liệu của `tim` (boolean)
    toggleTim: PropTypes.func.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default CategoryShow;
