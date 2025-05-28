import { FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react'; // Import useState
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation
import './CheckoutComp.css';
import {MetamaskPaymentPage} from '../../Pages/Payment/MetamaskPaymentPage';

export const CheckoutCompOne = () => {
  const [paymentMethod, setPaymentMethod] = useState(""); // State to track payment method
  const navigate = useNavigate(); // Navigate function

  // Function to handle payment method change
  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
    if (event.target.value === "metamask") {
      navigate("/metamask-payment"); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-4xl p-8">
        <h1 className="text-2xl font-outfit font-bold mb-6 flex items-center">
          Delivery
          <FaShoppingCart className="ml-2"/>
        </h1>
        <form>
          {/* Form fields for user information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstname" className="block text-sm font-outfit font-bold text-gray-700">Firstname</label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                className="mt-1 block w-full border-1 font-outfit  rounded-2xl border-gray-700 focus:border-black focus:ring-black text-base py-3 px-4"
              />
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-outfit font-bold text-gray-700">Lastname</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                className="mt-1 block w-full border-1 font-outfit rounded-2xl border-gray-700 focus:border-black focus:ring-black text-base py-3 px-4"
              />
            </div>
          </div>

          {/* Payment Methods Section */}
          <div className="bg-gray-100 border-1 mt-10 p-6 rounded-lg shadow-lg w-full">
            <h2 className="text-xl font-outfit font-bold mb-4">Payment Methods</h2>
            
            {/* Cash on delivery radio button */}
            <div className="mb-4">
              <label className="flex items-center font-bold font-outfit bg-black text-white p-4 rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={handlePaymentChange}
                  className="form-radio text-black mr-2 accent-[#e65100]"
                />
                <span>Cash on delivery</span>
              </label>
            </div>

            {/* Pay through Metamask radio button */}
            <div className="mb-4">
              <label className="flex items-center font-bold font-outfit bg-black text-white p-4 rounded-lg cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="metamask"
                  checked={paymentMethod === "metamask"}
                  onChange={handlePaymentChange} // Trigger navigation
                  className="form-radio text-black mr-2 accent-[#e65100]"
                />
                <span>Pay through Metamask</span>
              </label>
            </div>

            {/* Credit card payment section */}
            <div className="bg-black text-white p-4 rounded-lg">
              <label className="flex items-center mb-4 font-bold font-outfit cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="creditcard"
                  checked={paymentMethod === "creditcard"}
                  onChange={handlePaymentChange}
                  className="form-radio text-black mr-2 accent-[#e65100]"
                />
                <span>Pay through Credit card</span>
              </label>

              <div className="mb-4">
                <label className="block font-bold font-outfit mb-2">Card holder</label>
                <input type="text" className="w-full p-2 font-outfit rounded-lg text-black bg-white" placeholder="Card Holder Full Name" />
              </div>
              <div className="mb-4">
                <label className="block font-bold font-outfit mb-2">Card Number</label>
                <input type="text" className="w-full p-2 font-outfit rounded-lg text-black bg-white" placeholder="Card Number" />
              </div>
              <div className="flex space-x-4 mb-4">
                <div className="w-1/2">
                  <label className="block font-bold font-outfit mb-2">Expiration Date</label>
                  <input type="date" className="w-full p-2 font-outfit rounded-lg text-black bg-white" placeholder="MM/YY" />
                </div>
                <div className="w-1/2">
                  <label className="block font-bold font-outfit mb-2">Card Verification Code</label>
                  <input type="text" className="w-full p-2 font-outfit rounded-lg text-black bg-white" placeholder="****" />
                </div>
              </div>
              <button className="w-full bg-gray-300 font-bold font-outfit text-lg text-black mt-5 p-2 rounded-lg transition-all duration-300 hover:bg-[#D7521D] hover:scale-102 hover:text-white">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

