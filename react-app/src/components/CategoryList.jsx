import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import prop-types

const CategoryList = ({ setCategoryFilter }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách danh mục
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="mb-6">
      <h2 className="text-lg font-bold">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li
            key={category}
            className="cursor-pointer text-blue-500 hover:underline"
            onClick={() => setCategoryFilter(category)} // Khi chọn danh mục, cập nhật filter
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
CategoryList.propTypes = {
  setCategoryFilter: PropTypes.func.isRequired, // Đảm bảo rằng setCategoryFilter là một hàm
};
export default CategoryList;
