import './Cart.css';
import { FaPlus, FaMinus, FaTrash, FaCcVisa, FaCcMastercard, FaCcAmex, FaGooglePay, FaApplePay } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'INGROWN FACE DUO',
      price: 60,
      quantity: 1,
      image: 'https://placehold.co/100x100',
    },
    {
      id: 2,
      name: 'Route Package Protection',
      price: 1,
      quantity: 1,
      image: 'https://placehold.co/100x100',
    },
  ]);
  const [promoCode, setPromoCode] = useState('');
  const [promoMessage, setPromoMessage] = useState('');

  const updateQuantity = (id, delta) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = id => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handlePromoCode = () => {
    if (promoCode.toLowerCase() === 'discount10') {
      setPromoMessage('Promo code applied!');
    } else {
      setPromoMessage('Invalid promo code.');
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6">
      <h1 className="text-3xl font-outfit font-semibold text-center mb-8">Your Bag</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="grid grid-cols-5 gap-4 border-b pb-4 mb-4">
          <div className="col-span-2  font-outfit font-semibold">Product</div>
          <div className=" font-outfit font-semibold">Price</div>
          <div className=" font-outfit font-semibold">Quantity</div>
          <div className=" font-outfit font-semibold">Total</div>
        </div>
        {cartItems.map(item => (
          <div key={item.id} className="grid grid-cols-5 gap-4 items-center border-b pb-4 mb-4">
            <div className="col-span-2 flex items-center">
              <img src={item.image} alt={item.name} className="w-16 h-16 mr-4  font-outfit" />
              <div>
                <div className="font-semibold">{item.name}</div>
                <button onClick={() => removeItem(item.id)} className="text-sm text-gray-500 underline">
                  <FaTrash className="inline" />
                </button>
              </div>
            </div>
            <div className="font-semibold text-orange-500">PKR {item.price}</div>
            <div className="flex items-center">
              <button onClick={() => updateQuantity(item.id, -1)} className="border border-gray-300 px-2 py-1">
                <FaMinus />
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)} className="border border-gray-300 px-2 py-1">
                <FaPlus />
              </button>
            </div>
            <div className="font-semibold text-orange-500">PKR {item.price * item.quantity}</div>
          </div>
        ))}

        <div className="mb-4">
          <div className="font-semibold  font-outfit mb-2">Delivery Info</div>
          <div className="text-sm text-gray-500">See our delivery & returns info here</div>
        </div>

        <div className="mb-4">
          <div className="font-semibold  font-outfit mb-2">Payment Info</div>
          <div className="text-sm text-gray-500">We accept the following methods of payment</div>
          <div className="flex space-x-2 mt-2">
            <FaCcVisa className="text-2xl" />
            <FaCcMastercard className="text-2xl" />
            <FaCcAmex className="text-2xl" />
            <FaGooglePay className="text-2xl" />
            <FaApplePay className="text-2xl" />
          </div>
        </div>

        <div className="flex justify-between items-center border-t pt-4">
          <div>
            <div className="font-semibold  font-outfit">SUBTOTAL</div>
            <div className="text-2xl  font-outfit font-semibold text-orange-500">PKR {calculateTotal()}</div>
            <div className="text-sm text-gray-500">Taxes and shipping calculated at checkout</div>
            <input
              type="text"
              placeholder="Add promo code"
              value={promoCode}
              onChange={e => setPromoCode(e.target.value)}
              className="border border-gray-300 px-2 py-1 mt-2"
            />
            <button onClick={handlePromoCode} className="ml-2 bg-black text-white  font-outfit px-2 py-1 rounded">Apply</button>
            <div className="text-sm mt-1 text-red-500">{promoMessage}</div>
          </div>
          <div className="flex mt-15 space-x-4">
          <Link to='/home' className="bg-gray-200 text-gray-800 px-4 py-2 rounded">BACK</Link>
            <Link to='/checkout' className="bg-[#D7521D] text-white px-4 py-2 rounded transition-all duration-300 hover:bg-black hover:scale-105">CHECKOUT</Link>
          </div>
        </div>

      </div>
    </div>
  );
};
