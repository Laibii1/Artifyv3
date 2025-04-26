import './HeroSlider.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

export const HeroSlider = () => {
  return (
   
    <div className="z-[10]">
      <AwesomeSlider className="w-full h-[250px] sm:w-full sm:h-[450px] md:w-full md:h-[500px] lg:w-full lg:h-[500px]">
        {/* Slider 1 */}
        <div className="bg-[#809CFB] items-center w-full h-[250px] sm:w-full sm:h-[450px] md:w-full md:h-[500px] lg:w-full lg:h-[500px]
          justify-center
        lg:relative lg:flex lg:justify-center
         md:relative md:flex md:justify-center
         sm:relative sm:flex sm:justify-center">
          {/* Text Section */}
          <div className="absolute z-[20] 
          left-[70px] top-[40px] text-white
          lg:left-[100px] lg:top-[120px] lg:text-white
          md:left-[80px] md:top-[100px] md:text-white
          sm:left-[60px] sm:top-[100px] sm:text-white ">
            <hr className="w-[300px] border-t-4 border-black mb-2" />
            <p className="font-semibold font-outfit text-3xl lg:text-4xl md:text-4xl sm:text-3xl ">Celebrating Creativity</p>
            <h1 className="mt-10 font-bold font-Playpen  text-3xl lg:text-5xl  md:text-5xl sm:text-4xl lg:mt-20 md:mt-20 sm:mt-20">
              WELCOME TO <span className="text-black">ARTIFY</span> <br />
              <span className="text-black">CLOTH PLATFORM</span>
            </h1>
            
          </div>

          {/* Backward Images with Shadows */}
          <div className="absolute z-[10] lg:right-[420px] lg:bottom-[5px]
          md:right-[400px] md:bottom-[5px]
          sm:right-[350px] sm:bottom-[5px]">
            <img
              className="object-cover  shadow-xl drop-shadow-lg shadow-[rgba(51,49,49,0.36)] opacaity-0
              lg:w-[330px] lg:h-[330px] lg:rounded-full lg:opacity-100
               md:w-[300px] md:h-[300px] md:rounded-full md:opacity-100
               sm:w-[270px] sm:h-[270px] sm:rounded-full sm:opacity-100"
              alt="Artistic watercolor illustration"
              src="/HeroSlider1img.jpg"
            />
          </div>
          <div className="absolute z-[10] 
          right-[1px] opacity-65
          lg:right-[100px] lg:top-[1px] lg:opacity-100
          md:right-[80px] md:top-[1px] md:opacity-100
          sm:right-[50px] sm:top-[1px] sm:opacity-100">
            <img
              className="object-cover shadow-xl drop-shadow-lg shadow-[rgba(51,49,49,0.36)] 
              w-[600px] h-[250px]
              lg:w-[480px] lg:h-[480px] lg:rounded-full 
              md:w-[440px] md:h-[440px] md:rounded-full 
              sm:w-[400px] sm:h-[400px] sm:rounded-full "
              alt="Artistic watercolor illustration"
              src="/HeroSlider1img.jpg"
            />
          </div>
        </div>

        {/* Slider 2 */}
        <div className=" bg-[#AB6647] items-center w-full h-[250px] sm:w-full sm:h-[450px] md:w-full md:h-[500px] lg:w-full lg:h-[500px]
        justify-center
        lg:relative lg:flex lg:justify-center
         md:relative md:flex md:justify-center
         sm:relative sm:flex sm:justify-center">
          {/* Text Section */}
          <div className="absolute z-[20]
           left-[70px] top-[30px] text-white
          lg:left-[100px] lg:top-[120px] lg:text-white
          md:left-[80px] md:top-[100px] md:text-white
          sm:left-[60px] sm:top-[100px] sm:text-black">
            <p className="font-semibold font-outfit text-3xl lg:text-4xl md:text-4xl sm:text-3xl">Watercolor Art</p>
            <hr className="mt-10 w-[300px] border-t-4 border-black mb-2 text-3xl 
            lg:border- lg:text-5xl lg:mt-30
             md:border-white  md:mt-30 sm:mt-20 " />
            <h1 className="mt-5 font-bold font-Playpen  text-3xl lg:text-5xl  md:text-5xl sm:text-4xl">
            Bringing Watercolor <span className="text-black Fontoutfit font-bold text-3xl lg:text-5xl  md:text-5xl sm:text-4xl">Dreams </span>  
            <br />
              <span className="text-white text-2xl lg:text-4xl  md:text-4xl sm:text-4xl lg:text-white md:text-white ">to Life: Art in Every Stroke.</span>
            </h1>
          </div>

          {/* Backward Images with Shadows */}
          <div className="absolute z-[10]
          lg:right-[420px] lg:top-[70px] 
          md:right-[370px] md:top-[70px] 
          sm:right-[330px] sm:top-[70px] ">
           <img
              className="object-cover shadow-xl drop-shadow-lg shadow-[rgba(51,49,49,0.36)] opacity-0
              lg:w-[330px] lg:h-[300px] lg:rotate-[-27deg] lg:opacity-100
              md:w-[300px] md:h-[270px] md:rotate-[-27deg] md:opacity-100
              sm:w-[270px] sm:h-[240px] sm:rotate-[-27deg] sm:opacity-90"
             alt="Artistic watercolor illustration"
              src="/HeroSlider2img.jpeg"
            />
          </div> 
          <div className="absolute z-[10]
          right-[1px] opacity-65
          lg:right-[150px] lg:top-[70px] lg:opacity-100
          md:right-[100px] md:top-[70px] md:opacity-100
          sm:right-[60px] sm:top-[70px] sm:opacity-100">
            <img
              className="object-cover  shadow-xl drop-shadow-lg shadow-[rgba(51,49,49,0.36)]
              w-[600px] h-[250px] 
              lg:w-[380px] lg:h-[350px] lg:rotate-[-27deg]
               md:w-[350px] md:h-[320px] md:rotate-[-27deg]
                sm:w-[320px] sm:h-[290px] sm:rotate-[-27deg]"
              alt="Artistic watercolor illustration"
              src="/HeroSlider2img.jpeg"></img>
          </div>
        </div>


        {/* SLider 3 */}

        <div className="bg-[#D09A3F] relative items-center w-full h-[250px] sm:w-full sm:h-[450px] md:w-full md:h-[500px] lg:w-full lg:h-[500px]
        justify-center
        lg:relative lg:flex lg:justify-center
         md:relative md:flex md:justify-center
         sm:relative sm:flex sm:justify-center">
          {/* Text Section */}
          <div className="absolute inset-0 w-[400px] flex flex-col items-center justify-center text-black z-[20] text-center left-10 lg:left-25 lg:text-white md:left-20 md:text-white sm:left-15 sm:text-black">
            <p className=" font-semibold font-Playpen  lg:text-4xl md:text-4xl sm:text-4xl text-3xl">
              Elevate Your Style: Unique Handbag Art that Tells a Story
             </p>
            <hr className="mt-5 w-[400px] border-t-4 border-white mb-2 lg:mb-4 md:mb-4 sm:mb-3 lg:mt-10 md:mt-10 sm:mt-10" />
            <h1 className="mt-5 font-bold font-outfit text-3xl lg:text-5xl md:text-5xl sm:text-4xl lg:mt-10 md:mt-10 sm:mt-10  lg:text-white md:left-20 md:text-white sm:left-15 sm:text-white">
             Handbag Art
            </h1>
           </div>

          {/* Backward Images with Shadows */}
          <div className="absolute top-[15px] z-[10]
          opacity-0
          lg:right-[120px] lg:opacity-100
          md:right-[100px] md:opacity-100
          sm:right-[80px] sm:opacity-80">
            <img
              className="object-cover rounded-2xl shadow-xl drop-shadow-lg shadow-[rgba(51,49,49,0.36)]
              lg:w-[300px] lg:h-[330px] 
              md:w-[330px] md:h-[310px] 
              sm:w-[310px] sm:h-[280px] "
              alt="Artistic watercolor illustration"
              src="/HeroSlider3img.jpeg"
            />
          </div>
          <div className="absolute z-[10]
            opacity-65
           lg:right-[260px] lg:top-[40px] lg:opacity-100
            md:right-[240px] md:top-[40px] md:opacity-100
             sm:right-[220px] sm:top-[40px] sm:opacity-80">
            <img
              className="w-[600px] h-[250px] object-cover rounded-2xl shadow-xl drop-shadow-lg shadow-[rgba(51,49,49,0.36)]
              lg:w-[400px] lg:h-[430px]
              md:w-[370px] md:h-[400px]
              sm:w-[340px] sm:h-[370px] "
              alt="Artistic watercolor illustration"
              src="/HeroSlider3img.jpeg"
            />
          </div>
        </div>
      </AwesomeSlider>
    </div>
  );
};
