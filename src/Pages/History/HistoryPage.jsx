import { FirstHeader } from '../../components/FirstHeader/FirstHeader'
import { Navbar } from '../../components/Navbar/navbar';

import {EmailSubscription} from '../../components/EmailBar/Emailbar';
import { Footer } from '../../components/Footer/footer';
import { HistoryCompOne } from '../../components/History/HistoryCompOne';
import { HistoryCompTwo } from '../../components/History/HistoryCompTwo';
import { HistoryCompThree } from '../../components/History/HistoryCompThree';
import { HistoryCompFour } from '../../components/History/HistoryCompFour';

export const HistoryPage=()=>{
  return(
    <> 
    <FirstHeader/>
     <Navbar/>
    <HistoryCompOne/>
    <HistoryCompTwo/>
    <HistoryCompThree/>
    <HistoryCompFour/>
     <EmailSubscription/>
     <Footer/>

    </>
  );
 
};

