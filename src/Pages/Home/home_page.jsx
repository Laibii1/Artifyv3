import { FirstHeader } from '../../components/FirstHeader/FirstHeader'
import { HeroSlider } from '../../components/HeroSlider/HeroSlider';
import { Navbar } from '../../components/Navbar/navbar';
import {ArtistWork} from '../../components/AristWorkSection/AristWorkSection';
import { ExtraArt } from '../../components/Extraordinarywork/Extraordinarywork';
import {DiscountProductCard} from '../../components/DiscountSection/DiscountSection';
import { DiscoverMore } from '../../components/DiscoverMore/Discovermore';
import {ThreadedMasterpieces} from '../../components/Masterpieces/Masterpieces';
import {EmailSubscription} from '../../components/EmailBar/Emailbar';
import { Footer } from '../../components/Footer/footer';

export const Home=()=>{
  return(
    <> 
    <FirstHeader/>
     <Navbar/>
     <HeroSlider/>
     <ArtistWork/>
     <ExtraArt/>
     <DiscountProductCard/>
     <DiscoverMore/>
     <ThreadedMasterpieces/>
     <EmailSubscription/>
     <Footer/>

    </>
  );
 
};



