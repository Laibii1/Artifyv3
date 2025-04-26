
import './FirstHeader.css'

export const FirstHeader = ()=> {
  return (
    <header className="w-full h-[30px] lg:h-[40px] bg-black flex items-center justify-center">
      <div className="relative flex items-center justify-center max-w-[851px] h-[46px] px-4 ">
        <div className="absolute w-[7px] lg:w-[9px] h-[7px] lg:h-[9px] top-5 right-0 bg-[#008a77] rounded-full" />
        <h1 className="font-['Outfit',Helvetica] font-semibold text-white text-[9px] sm:text-[12px] md:text-sm lg:text-sm xl:text-sm tracking-wide text-center leading-tight">
            Empowering artists with blockchain innovation and limitless opportunities.
        </h1>
        <div className="absolute  w-[7px] lg:w-[9px] h-[7px] lg:h-[9px] top-5 left-0 bg-[#ff743b] rounded-full" />
      </div>
    </header>
  );
};