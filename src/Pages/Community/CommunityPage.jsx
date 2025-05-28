// import { FirstHeader } from '../../components/FirstHeader/FirstHeader'
// import { Navbar } from '../../components/Navbar/navbar';

// import {EmailSubscription} from '../../components/EmailBar/Emailbar';
// import { Footer } from '../../components/Footer/footer';
// import { CommunityCompOne } from '../../components/Community/CommunityCompOne';
// import { CommunityCompTwo } from '../../components/Community/CommunityCompTwo';
// import { CommunityCompThree } from '../../components/Community/CommunityCompThree';

// export const CommunityPage=()=>{
//   return(
//     <> 
//     <FirstHeader/>
//      <Navbar/>
//     <CommunityCompOne/>
//     <CommunityCompTwo/>
//     <CommunityCompThree/>
//      <EmailSubscription/>
//      <Footer/>

//     </>
//   );
 
// };


import { useState } from 'react';
import { FirstHeader } from '../../components/FirstHeader/FirstHeader';
import { Navbar } from '../../components/Navbar/navbar';
import { EmailSubscription } from '../../components/EmailBar/Emailbar';
import { Footer } from '../../components/Footer/footer';
import { CommunityCompOne } from '../../components/Community/CommunityCompOne';
import { CommunityCompTwo } from '../../components/Community/CommunityCompTwo';
import { CommunityCompThree } from '../../components/Community/CommunityCompThree';

export const CommunityPage = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* Popup Section */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2 className="popup-heading">
              Welcome to Arify Cloth Community
            </h2>
            <p className="popup-text">
              Have art to display? You're in the right place! Connect with artists and showcase your work in our community.
            </p>
            <button className="close-button" onClick={closePopup}>X</button>
            <a href="https://artify-platform.mn.co/spaces/19108320/feed" target="_blank" rel="noopener noreferrer">
              <button className="community-button">
                Join Our Creative Community
              </button>
            </a>
          </div>
        </div>
      )}

      {/* Rest of the page */}
      <FirstHeader />
      <Navbar />
      <CommunityCompOne />
      <CommunityCompTwo />
      <CommunityCompThree />
      <EmailSubscription />
      <Footer />

      {/* Inline CSS */}
      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .popup-content {
          background-color: white;
          color: black;
          padding: 30px;
          border-radius: 16px;
          text-align: center;
          width: 40%;
          max-width: 500px;
          position: relative;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          border: 2px solid #ddd;
          height: 300px;
        }

        .popup-heading {
          font-weight: bold;
          margin-bottom: 15px;
          font-size: 1.4rem;
          color: #333;
        }

        .popup-text {
          margin-bottom: 20px;
          font-size: 1rem;
          line-height: 1.6;
          color: #555;
        }

        .close-button {
          background-color: black;
          color: white;
          border: none;
          font-size: 22px;
          cursor: pointer;
          position: absolute;
          top: -12px;
          right: -12px;
          padding: 6px;
          border-radius: 50%;
          transition: all 0.3s ease;
          width: 30px;
          height: 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .close-button:hover {
          background-color: #f1f1f1;
          color: red;
          transform: scale(1.2);
        }

        .community-button {
          background-color: #e65100;
          color: white;
          border: none;
          padding: 12px 24px;
          font-size: 1.1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease;
          margin-top: 20px;
        }

        .community-button:hover {
          background-color: #ff7043;
          transform: scale(1.1);
        }

        /* Responsive Styling */
        @media (max-width: 768px) {
          .popup-content {
            width: 80%;
            max-width: 400px;
            padding: 20px;
          }

          .popup-heading {
            font-size: 1.2rem;
          }

          .popup-text {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};




