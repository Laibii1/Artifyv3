import React from 'react';
import Wallet from "./Wallet.jsx";
import { Navbar } from '../../components/Navbar/navbar';
import { Footer } from '../../components/Footer/footer';

export const MetamaskPaymentPage = () => {
    return (
        <div>
          <Navbar />
          <br/>
          <br/>
          <Wallet />
          <br/>
          <br/>
          <Footer />
      </div>
    );
  };

