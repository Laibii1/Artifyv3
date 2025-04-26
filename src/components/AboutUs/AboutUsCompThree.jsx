import './AboutUsComp.css';

export const AboutUsCompThree = () => {
  const ProcessSection = ({ number, title, description, imgSrc, imgAlt, imgHeight }) => (
    <div className="text-center flex flex-col justify-end">
      <h3 className="text-2xl font-bold" style={{ color: number === '01' ? '#D7521D' : '#D7521D' }}>{number}</h3>
      <h4 className="text-xl font-bold mt-2" style={{ color: number === '01' ? '#D7521D' : '#D7521D' }}>{title}</h4>
      <p className="text-white mt-2">{description}</p>
      <img src={imgSrc} alt={imgAlt} className={`rounded-lg mt-4 w-3/3 ${imgHeight} self-center`} />
    </div>
  );

  return (
    <div className="bg-black text-center p-6 mt-40">
      <div>
        <div className="text-center py-10">
          <h1 className="text-3xl text-white font-outfit font-bold">Our Process</h1>
          <h2 className="mt-5 text-3xl playwrite-font font-bold text-[#008A77]">
            How We <span className="text-[#D7521D]">Make </span> <span className="text-[#008A77]"> It Happen</span>
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            We bridge the gap for artists, helping them showcase their skills, build a strong foundation, and connect with buyers to turn their passion into a thriving business.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-end space-y-8 md:space-y-0 md:space-x-8 px-4 font-outfit">
          <ProcessSection
            number="01"
            title="Empowering Artists:"
            description="We identify and onboard talented artists, providing them with a platform to showcase their creations and reach a wider audience."
            imgSrc="/AboutUs6.jpeg"
            imgAlt="A vibrant artistic representation of a woman with flowers"
            imgHeight="h-[400px]"  // Height set to 400px
          />
          <ProcessSection
            number="02"
            title="Collaborative Growth:"
            description="We partner with diverse communities to help artists build a strong foundation and create meaningful opportunities for their growth."
            imgSrc="/AboutUs7.jpeg"
            imgAlt="A black and white artistic representation of a woman with a headscarf"
            imgHeight="h-[500px]"  // Height set to 500px
          />
          <ProcessSection
            number="03"
            title="Building a Community:"
            description="We foster a vibrant community where artists connect, collaborate, and share opportunities to support and inspire each other."
            imgSrc="/AboutUs8.jpeg"
            imgAlt="A vibrant artistic representation of a community with a dome"
            imgHeight="h-[600px]"  // Height set to 600px
          />
        </div>
      </div>
    </div>
  );
};
