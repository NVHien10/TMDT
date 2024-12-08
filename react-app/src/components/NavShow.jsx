import headeraoxanh from "../image/header/header-aoxanh.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Nav = [
  {
    id: 1,
    name: "Woman",
    link: "#",
  },
  {
    id: 2,
    name: "Male",
    link: "#",
  },
  {
    id: 3,
    name: "Mother-Child",
    link: "#",
  },
  {
    id: 4,
    name: "Home & Furniture",
    link: "#",
  },
  {
    id: 5,
    name: "Super market",
    link: "#",
  },
  {
    id: 6,
    name: "Cosmetics",
    link: "#",
  },
  {
    id: 7,
    name: "Shoe & Bag",
    link: "https://www.google.com.vn/",
  },
  {
    id: 8,
    name: "Electronic",
    link: "/Electronic",
  },
  {
    id: 9,
    name: "Sport & Outdoor",
    link: "#",
  },
  {
    id: 10,
    name: "Best seller",
    link: "#",
  },
];
export const DropDownlink = [
  {
    id: 1,
    h1: "Shoe & Bag",
    link: "#",
    item: ["Casual Shoes", "Boots", "Sandals", "Slippers"],
  },
  {
    id: 2,
    h1: "Home Textile",
    link: "#",
    item: ["Bedding", "Pillows", "Handkerchief Towels", "Curtain"],
  },
  {
    id: 3,
    h1: "Party Supplies",
    link: "#",
    item: ["Event & Party", "Christmas", "Artificial Decorations", "Wedding"],
  },
  {
    id: 4,
    h1: "Luxury & designer",
    link: "#",
    item: ["Casual Shoes", "Boots", "Sandals", "Slippers"],
  },
  {
    id: 5,
    h1: "Cosmetics",
    link: "#",
    item: ["Casual Shoes", "Boots", "Sandals", "Slippers"],
  },
  {
    id: 6,
    h1: "Sport & Outdoors",
    link: "#",
    item: ["Casual Shoes", "Boots", "Sandals", "Slippers"],
  },
  {
    id: 7,
    h1: "Clothes",
    link: "#",
    item: [
      "Bottoms",
      "Women's Clothing",
      "T-Shirts and Tops",
      "Dresses",
      "Outerwear",
      "Formal Wear",
      "Casual Wear",
      "Seasonal Collections",
      "Sports Bras",
      "Workout Tops",
      "Fall Wardrobe",
    ],
  },
];
const NavShow = () => {
  const [showElectronic, setShowElectronic] = useState(false);
  const handleClick = () => {
    setShowElectronic(!showElectronic);
    console.log("setShowElectronic");
    // Cập nhật state để hiển thị component
  };

  return (
    <div className="hidden mdd:inline lgg:block">
      <div className="z-[9999] mx-[90px] my-[16px] flex h-[52px] justify-between font-lato text-[14px]">
        {Nav.map((data) => (
          <div key={data.id} className={`group`}>
            <Link onClick={handleClick} to={data.link}>
              {data.name}
            </Link>
            <div
              className={`${data.id === 1 ? "group-hover:flex" : "hidden"} absolute z-50 hidden bg-white pr-6 pt-5`}
            >
              <ul className="grid grid-cols-4 gap-6 px-6 pb-2">
                {DropDownlink.map((data) => (
                  <li className="pt-2" key={data.id}>
                    <Link
                      className="font-lato font-bold uppercase hover:text-blue-400"
                      to={data.link}
                    >
                      {data.h1}
                    </Link>

                    <div className="pt-1 hover:text-blue-400">
                      {data.item.map((subItem, index) => (
                        <Link
                          key={index} // Sử dụng index làm key nếu không có id
                          className="block hover:text-blue-400"
                          to="#" // Thay thế với đường dẫn cụ thể
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="hidden lg:block">
                <img
                  className="my-4 h-fit w-[275px] pl-6"
                  src={headeraoxanh}
                  alt="headeraoxanh"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavShow;
