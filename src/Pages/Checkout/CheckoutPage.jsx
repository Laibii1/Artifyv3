import { FirstHeader } from '../../components/FirstHeader/FirstHeader'
import { Navbar } from '../../components/Navbar/navbar';
import { Footer } from '../../components/Footer/footer';
import { EmailSubscription } from '../../components/EmailBar/Emailbar';
import { CheckoutCompOne } from '../../components/Checkout/CheckoutCompOne';




export const CheckoutPage=()=>{
  return(
    <> 
    <FirstHeader/>
     <Navbar/>
    <CheckoutCompOne/>
    <EmailSubscription/>
     <Footer/>

    </>
  );
 
};

