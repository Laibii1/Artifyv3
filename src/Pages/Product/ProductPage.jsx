import { FirstHeader } from '../../components/FirstHeader/FirstHeader'
import { Navbar } from '../../components/Navbar/navbar';
import { Footer } from '../../components/Footer/footer';
import { ProductCompOne } from '../../components/Product/ProductCompOne';
import { ProductCompTwo } from '../../components/Product/ProductCompTwo';
import { EmailSubscription } from '../../components/EmailBar/Emailbar';




export const ProductPage=()=>{
  return(
    <> 
    <FirstHeader/>
     <Navbar/>
    <ProductCompOne/>
    <ProductCompTwo/>
    <EmailSubscription/>
     <Footer/>

    </>
  );
 
};

