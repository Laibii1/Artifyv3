import React, { useState } from 'react';
import { Profile } from './Profile'; // Ensure correct path
import './ProfileCreation.css'; // Ensure this includes styling for .popup-overlay and .popup
import { FaCheckCircle } from 'react-icons/fa';
import { useUser } from '../Contexts/UserContext'; // Import useUser hook

export const ProfileForm = ({ initialData }) => {
  const [image, setPhoto] = useState(initialData?.image || './Userpic.jpg');
  const [firstName, setFirstName] = useState(initialData?.firstName || '');
  const [lastName, setLastName] = useState(initialData?.lastName || '');
  const [about, setAbout] = useState(initialData?.about || '');
  const [profession, setProfession] = useState(initialData?.profession || '');
  const [termsChecked, setTermsChecked] = useState(false);
  const [error, setError] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState('Your profile has been successfully created.');

  const { setUser } = useUser(); // Destructure setUser from the context

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(URL.createObjectURL(file)); // Set photo to the selected file
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName) {
      setError('First Name and Last Name are required.');
      return;
    }
    if (!profession) {
      setError('Please select your profession.');
      return;
    }
    setError('');

    // Create the full name and set it to context
    const fullName = `${firstName} ${lastName}`;
    setUser({ firstname: firstName, lastname: lastName, image , about, profession }); // Update context with the user's full name and other details

    setShowPopup(true);
    setSuccessMessage('Your profile has been updated successfully.');
  };

  const handleViewProfile = () => {
    setShowPopup(false);
    setShowProfile(true);
  };

  const images = [
    "/ProfileCreation1.jpeg",
    "/ProfileCreation2.jpeg",
    "/ProfileCreation3.jpeg",
    "/ProfileCreation4.jpeg",
  ];

  return (
    <>
      {!showProfile ? (
        <>
          <div className="flex flex-col items-center justify-center text-center px-4 mt-20 mb-20">
            <div className="flex items-center justify-center mt-10">
              {images.map((src, index) => (
                <div
                  key={index}
                  className="w-28 h-28 md:w-46 md:h-46 lg:w-60 lg:h-60 rounded-lg overflow-hidden shadow-lg -ml-5 first:ml-0 drop-shadow-lg shadow-[rgba(51,49,49,0.36)] rotate-[17deg]"
                >
                  <img
                    src={src}
                    alt={`Embroidery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center min-h-screen">
            <div className="w-full lg:w-4/5 mx-4 mt-20">
              <h1 className="text-center text-xl font-bold font-outfit mb-2">
                Welcome to the platform
              </h1>
              <h1 className="text-center text-lg font-outfit mb-6">
                Let's start with your profile creation
              </h1>

              <div className="bg-white shadow-lg rounded-lg p-8 border-2 border-black drop-shadow-lg shadow-[rgba(51,49,49,0.36)]">
                <h2 className="text-center text-lg font-semibold mb-2 font-outfit">
                  {initialData ? 'Edit your profile' : 'Create your profile'}
                </h2>
                <p className="text-center text-sm mb-6 font-outfit">
                  Keep your personal details private. Information you add here is visible to anyone who can view your profile.
                </p>

                <div className="flex flex-col items-center mb-6">
                  <div
                    className="w-24 h-24 bg-gray-200 rounded-full mb-4"
                    style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}
                  ></div>
                  <input
                    type="file"
                    accept="image/*"
                    id="image"
                    onChange={handlePhotoChange}
                    className="hidden"
                  />
                  <button
                    className="bg-black text-white py-2 px-4 rounded-full font-outfit"
                    onClick={() => document.getElementById('image').click()}
                  >
                    Change the photo
                  </button>
                </div>

                <div className="flex flex-col md:flex-row md:space-x-4 mb-6">
                  <input
                    type="text"
                    placeholder="Firstname*"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full md:w-1/2 p-2 border rounded-full mb-4 md:mb-0 font-outfit"
                  />
                  <input
                    type="text"
                    placeholder="Lastname*"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full md:w-1/2 p-2 border rounded-full font-outfit"
                  />
                </div>

                <div className="mb-6">
                  <textarea
                    placeholder="About"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    className="w-full p-2 border rounded-lg h-32 font-outfit"
                    maxLength="800"
                  ></textarea>
                  <p className="text-right text-sm mt-1">
                    {about.length}/800
                  </p>
                </div>

                <div className="mb-6">
                  <label htmlFor="profession" className="block mb-2 font-outfit">
                    Professional*
                  </label>
                  <select
                    id="profession"
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    className="w-full p-2 border rounded-full mb-2 font-outfit"
                  >
                    <option value="" disabled>Select your profession</option>
                    <option value="Student">Student</option>
                    <option value="Professional Artists">Professional Artists</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Don't display the terms checkbox if data is passed */}
                {!initialData && (
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="terms"
                      checked={termsChecked}
                      onChange={() => setTermsChecked(!termsChecked)}
                      className="mr-2 bg-black accent-black"
                    />
                    <label htmlFor="terms" className="text-sm font-outfit">
                      I agree to the terms and conditions
                    </label>
                  </div>
                )}

                {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                <button
                  className="bg-black text-white py-2 px-4 rounded-full w-full font-outfit transition-all duration-300 hover:bg-[#D7521D] hover:scale-105"
                  onClick={handleSubmit}
                >
                  {initialData ? 'Save changes' : 'Create profile'}
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Profile
          firstName={firstName}
          lastName={lastName}
          image={image}
          about={about}
          profession={profession}
        />
      )}

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-30 pointer-events-none">
          <div className="bg-black p-10 rounded-2xl shadow-2xl text-center max-w-sm pointer-events-auto">
            <h2 className="text-2xl text-white font-bold mb-2 font-outfit">Congratulations!</h2>
            <p className="mb-4 text-sm text-white font-outfit">{successMessage}</p>
            <div className="flex justify-center text-5xl text-white mb-4">
              <FaCheckCircle />
            </div>
            <button
              className="bg-white mt-5 w-2/3 font-outfit text-black py-2 px-4 rounded-full transition-all duration-300 hover:bg-[#D7521D] hover:text-white hover:scale-105"
              onClick={handleViewProfile}
            >
              View Profile
            </button>
          </div>
        </div>
      )}
    </>
  );
};
