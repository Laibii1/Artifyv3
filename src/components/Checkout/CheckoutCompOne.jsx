import { FaShoppingCart } from 'react-icons/fa';
import './CheckoutComp.css';

export const CheckoutCompOne = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-4xl p-8">
        <h1 className="text-2xl font-outfit font-bold mb-6 flex items-center">
          Delivery
          <FaShoppingCart className="ml-2"/>
        </h1>
        <form>
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

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-outfit font-bold text-gray-700">Enter your address</label>
            <input
              type="text"
              id="address"
              name="address"
              className="mt-1 block w-full border-1 font-outfit  rounded-2xl border-gray-700 focus:border-black focus:ring-black text-base py-3 px-4"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="city" className="block text-sm font-outfit font-bold text-gray-700">City</label>
              <input
                type="text"
                id="city"
                name="city"
                className="mt-1 block w-full border-1 font-outfit rounded-2xl border-gray-700 focus:border-black focus:ring-black text-base py-3 px-4"
              />
            </div>
            <div>
              <label htmlFor="postalcode" className="block text-sm font-outfit font-bold text-gray-700">Postal code (optional)</label>
              <input
                type="text"
                id="postalcode"
                name="postalcode"
                className="mt-1 block w-full border-1 font-outfit rounded-2xl border-gray-700 focus:border-black focus:ring-black text-base py-3 px-4"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="phoneno" className="block text-sm font-outfit font-bold text-gray-700">Phone no</label>
            <input
              type="text"
              id="phoneno"
              name="phoneno"
              defaultValue="+92"
              className="mt-1 block w-full border-1 font-outfit  rounded-2xl border-gray-700 focus:border-black focus:ring-black text-base py-3 px-4"
            />
          </div>

          <div className="flex items-center">
            <input
              id="saveinfo"
              name="saveinfo"
              type="checkbox"
              className="h-5 w-5 border-gray-300 accent-black"
            />
            <label htmlFor="saveinfo" className="ml-2 block text-sm text-gray-900">
              Save this information for next time
            </label>
          </div>
        </form>

        <div className="bg-gray-100 border-1 mt-10 p-6 rounded-lg shadow-lg w-full ">
                    <h2 className="text-xl font-outfit font-bold mb-4">Payment Methods</h2>
                    <div className="mb-4">
                        <label className="flex items-center font-bold font-outfit bg-black text-white p-4 rounded-lg cursor-pointer">
                            <input type="radio" name="payment" className="form-radio text-black mr-2 accent-[#e65100]" />
                            <span>Cash on delivery</span>
                        </label>
                    </div>
                    <div className="bg-black text-white p-4 rounded-lg">
                        <label className="flex items-center mb-4 font-bold font-outfit cursor-pointer">
                            <input type="radio" name="payment" className="form-radio text-black mr-2  accent-[#e65100]" />
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
      </div>
    </div>
  );
};
