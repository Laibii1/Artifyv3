import { FirstHeader } from '../../components/FirstHeader/FirstHeader'
import { Navbar } from '../../components/Navbar/navbar';
import { ProfileCreation } from '../../components/ProfileCreationComp/ProfileCreation';
import { Footer } from '../../components/Footer/footer';

export const ProfileCreationPage=()=>{
  return(
    <> 
    <FirstHeader/>
     <Navbar/>
     <ProfileCreation/>
     <Footer/>

    </>
  );
 
};

