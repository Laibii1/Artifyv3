import { FirstHeader } from '../../components/FirstHeader/FirstHeader'
import { Navbar } from '../../components/Navbar/navbar';

import {EmailSubscription} from '../../components/EmailBar/Emailbar';
import { Footer } from '../../components/Footer/footer';
import { CommunityCompOne } from '../../components/Community/CommunityCompOne';
import { CommunityCompTwo } from '../../components/Community/CommunityCompTwo';
import { CommunityCompThree } from '../../components/Community/CommunityCompThree';

export const CommunityPage=()=>{
  return(
    <> 
    <FirstHeader/>
     <Navbar/>
    <CommunityCompOne/>
    <CommunityCompTwo/>
    <CommunityCompThree/>
     <EmailSubscription/>
     <Footer/>

    </>
  );
 
};

