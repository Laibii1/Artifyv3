import './AboutUsComp.css';

export const AboutUsCompFive = () => {
    const TeamMember = ({ name, title, imageUrl, altText, className }) => (
        <div className={`flex flex-col items-center ${className}`}>
          <img
            src={imageUrl}
            alt={altText}
            className="rounded-t-4xl w-70 h-75 object-cover"
          />
          <div className="bg-black font-outfit text-white text-center py-4 px-4 rounded-3xl w-82">
            <p className="font-bold">{name}</p>
            <p>{title}</p>
          </div>
        </div>
      );
      
     
        return (
          <div className="bg-white flex flex-col items-center justify-center  mt-25 ">
            <h1 className="text-3xl font-outfit font-bold mb-8">Our Team</h1>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-30">
              <TeamMember
                name="Ayesha Imtiaz"
                title="Founder & Project Lead"
                imageUrl="/Teampic2.jpeg"
                altText="Ayesha Imtiaz, Founder & Project Lead"
              />
              <TeamMember
                name="Laiba Riaz"
                title="Operational Manager"
                imageUrl="/Teampic1.jpg"
                altText="Laiba Riaz,Operational Manager"
                className="mt-20 md:mt-30"
              />
            </div>
          </div>
       
 
  );
};
