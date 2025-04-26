import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaThumbsUp } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

const AboutUsEmailSubscription = () => {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fs7v176", 
        "template_pr80fkc", 
        {
          user_email: email,
          from_email: "laiba.riaz545@gmail.com",
        },
        "_QUTak-OFm_p1Dlto"
      )
      .then(() => {
        setIsSent(true);
        setEmail("");
      })
      .catch((error) => console.error("Email sending failed:", error));
  };

  return (
    <>
      {isSent ? (
        <div className="bg-black text-white w-full max-w-2xl px-4 py-2 rounded-md flex justify-center text-center mb-5">
          <span className="mr-2 font-outfit">Done</span>
          <FaThumbsUp />
        </div>
      ) : (
        <form
          className="flex flex-col sm:flex-row w-full max-w-2xl gap-2 sm:gap-0 mb-5 px-5 mt-10"
          onSubmit={sendEmail}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-5 py-3 font-outfit sm:rounded-l-lg bg-white text-black text-base w-full focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#e65100] text-white px-6 py-3 sm:rounded-r-md font-semibold font-outfit"
          >
            <HiArrowNarrowRight className="w-10 h-10" />
          </button>
        </form>
      )}
     </>
  );
};

export default AboutUsEmailSubscription;
