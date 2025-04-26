import './CommunityComp.css';

export const CommunityCompTwo = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-15">
    <h2 className="text-2xl font-bold font-outfit text-center mb-4">What Will You Get?</h2>
    <p className="text-center mb-12 font-outfit font-medium ">
      Exclusive opportunities to showcase your artwork, receive valuable feedback, and turn your creativity into a thriving brand
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.3)] rounded-lg border-1 p-6 text-center">
        <img
          src="/CommunityComp2Img1.jpeg"
          alt="Illustration of hands holding different colored fabric pieces"
        className="mx-auto w-[200px] h-[200px] rounded-full mt-5 mb-7 shadow-[4px_4px_10px_rgba(0,0,0,0.2)]"
         
        />
        <h3 className="text-2xl font-bold Inter-font mb-2">Inspire</h3>
        <p  className='FontoutfitLight'>
          Discover unique fabric designs, explore artistic trends, and fuel your creativity with a vibrant community of passionate artists
        </p>
      </div>
      <div className="bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.3)] rounded-lg border-1 p-6 text-center">
        <img
          src="/CommunityComp2Img2.jpeg"
          alt="Illustration of two people collaborating on a project"
          className="mx-auto w-[200px] h-[200px] rounded-full mt-5 mb-7 shadow-[4px_4px_10px_rgba(0,0,0,0.2)]"
        />
        <h3 className="text-2xl font-bold Inter-font mb-2">Connect</h3>
        <p className='FontoutfitLight'>
          Engage with fellow designers, collaborate on projects, and build meaningful relationships within the artistic community
        </p>
      </div>
      <div className="bg-white shadow-[4px_4px_10px_rgba(0,0,0,0.3)] rounded-lg border-1 p-6 text-center">
        <img
          src="/CommunityComp2Img3.jpeg"
          alt="Illustration of a person watering a plant"
           className="mx-auto w-[200px] h-[200px] rounded-full mt-5 mb-7 shadow-[4px_4px_10px_rgba(0,0,0,0.2)]"
        />
        <h3 className="text-2xl font-bold Inter-font mb-2">Thrive</h3>
        <p className='FontoutfitLight'>
          Grow your brand, gain recognition, and turn your passion for art into a successful journey
        </p>
      </div>
    </div>
  </div>

  );
};
