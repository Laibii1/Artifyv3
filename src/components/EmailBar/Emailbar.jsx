import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCheck, FaThumbsUp  } from "react-icons/fa";

export const EmailSubscription = () => {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_fs7v176", // Replace with your Email.js Service ID
      "template_pr80fkc", // Replace with your Email.js Template ID
      {
        user_email: email,  // The entered email will be sent to this user
        from_email: "laiba.riaz545@gmail.com" // Your email address
      },
      "_QUTak-OFm_p1Dlto" // Replace with your Email.js Public Key
    )
    .then(() => {
      setIsSent(true);
      setEmail("");
    })
    .catch((error) => console.error("Email sending failed:", error));
  };

  return (
    <div className="flex flex-col items-center justify-center text-center mt-20 p-5">
       {/* Bottom Text */}
       <p className="text-sm md:text-base font-bold text-black-700 font-outfit max-w-xl">
          Send me exclusive offers, unique gift ideas, and personalised tips for 
          shopping and selling on Artify platform.
        </p>

      {isSent ? (
        <div className="bg-black text-white px-4 py-2 rounded-md flex items-center">
          <span className="mr-2">Done</span> <FaThumbsUp />
        </div>
      ) : (
        <form onSubmit={sendEmail} className="flex font-bold items-center bg-black text-white p-3 rounded-lg w-2/3 lg:w-1/2 md:w-1/2 sm:w-1/2 mt-10">
          <input
            type="email"
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-black outline-none text-white placeholder-white font-outfit flex-grow px-2"
          />
          <button type="submit">
            <FaCheck className="text-white text-lg" />
          </button>
        </form>
      )}
    </div>
  );
};


