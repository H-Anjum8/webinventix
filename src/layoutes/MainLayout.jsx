import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import PopupForm from '../components/Common/PopupForm';

const MainLayout = ({ children }) => {
  const [hideHeaderFooter, setHideHeaderFooter] = useState(false);

  return (
    <div>
      {!hideHeaderFooter && <Header />}
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}
      <PopupForm onPdfOpen={() => setHideHeaderFooter(true)} onPdfClose={() => setHideHeaderFooter(false)} />
    </div>
  );
};

export default MainLayout;