import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

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

  // Tính tổng giá trị giỏ hàng
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h2 className="mb-4 text-2xl font-bold">Giỏ hàng của bạn</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center space-x-4">
              <img src={item.image} alt={item.title} className="h-16 w-16" />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">${item.price}</p>
                
                <div className="flex items-center space-x-2">
                  <button
                    className="rounded bg-gray-300 p-1"
                    onClick={() => decreaseQuantity(item)} // Giảm số lượng
                  >
                    -
                  </button>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <button
                    className="rounded bg-gray-300 p-1"
                    onClick={() => increaseQuantity(item)} // Tăng số lượng
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4">
        <p className="text-lg font-semibold">Tổng cộng: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
