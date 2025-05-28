import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../Home/home_page';
import { ProfileCreationPage } from '../Create profile page/ProfileCreationPage';
import { AboutUsPage } from '../AboutUs/AboutUsPage';
import { CommunityPage } from '../Community/CommunityPage';
import { HistoryPage } from '../History/HistoryPage';
import { Error404Page } from '../NoPage/Error404';
import { ProfilePage } from '../Profile/ProfilePage';
import {CartPage} from '../Cart/CartPage';
import { ProductPage } from '../Product/ProductPage';
import {CheckoutPage} from '../Checkout/CheckoutPage';
import { UserProvider } from '../../components/Contexts/UserContext'; // ✅ import context
import { UploadedItemsProvider } from '../../components/Contexts/UploadedItemsContext';
import { ProductCompOne } from '../../components/Product/ProductCompOne';
import {MetamaskPaymentPage} from '../Payment/MetamaskPaymentPage';

const App = () => {
  return (
    <UserProvider> {/* ✅ wrap everything inside provider */}
    <UploadedItemsProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create-profile" element={<ProfileCreationPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/metamask-payment" element={<MetamaskPaymentPage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </BrowserRouter>
      </UploadedItemsProvider>
    </UserProvider>
  );
};

export default App;
