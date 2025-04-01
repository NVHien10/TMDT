import { useEffect, useState, useContext, useCallback } from "react";
import { CartContext } from "../context/CartContext";
import CategoryList from "./CategoryList";
import { fetchProducts } from "../services/api"; // Import optimized API function
import PropTypes from "prop-types"; // Import prop-types
import React from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const { addToCart } = useContext(CartContext);

  const loadProducts = useCallback(async () => {
    try {
      const data = await fetchProducts(categoryFilter);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }, [categoryFilter]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-6 text-center text-2xl font-bold">Product List</h1>
      <div className="flex">
        <div className="w-1/4">
          <CategoryList setCategoryFilter={setCategoryFilter} />
        </div>
        <div className="w-3/4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductItem = ({ product, addToCart }) => (
  <div className="rounded-lg bg-white p-4 shadow-lg">
    <img
      src={product.image}
      alt={product.title}
      className="mb-4 h-48 w-full rounded object-cover"
    />
    <h2 className="mb-2 text-lg font-semibold">{product.title}</h2>
    <p className="mb-4 text-gray-600">${product.price}</p>
    <button
      className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      onClick={() => addToCart(product)}
    >
      Add to Cart
    </button>
  </div>
);
ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired, // Add validation for image
    price: PropTypes.number.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
