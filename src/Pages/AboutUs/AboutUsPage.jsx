import { FirstHeader } from '../../components/FirstHeader/FirstHeader'
import { Navbar } from '../../components/Navbar/navbar';
import { Footer } from '../../components/Footer/footer';
import { AboutUsCompOne } from '../../components/AboutUs/AboutUsCompOne';
import { AboutUsCompTwo } from '../../components/AboutUs/AboutUsCompTwo';
import { AboutUsCompThree } from '../../components/AboutUs/AboutUsCompThree';
import { AboutUsCompFour } from '../../components/AboutUs/AboutUsCompFour';
import { AboutUsCompFive } from '../../components/AboutUs/AboutUsCompFive';


export const AboutUsPage=()=>{
  return(
    <> 
    <FirstHeader/>
     <Navbar/>
     <AboutUsCompOne/>
     <AboutUsCompTwo/>
     <AboutUsCompThree/>
     <AboutUsCompFour/>
     <AboutUsCompFive/>
     <Footer/>

    </>
  );
 
};

