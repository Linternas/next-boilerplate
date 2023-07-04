'use client';

import { useState } from 'react';

import Gnb from 'src/components/global/Gnb';
import Header from 'src/components/global/Header';
import Footer from './global/Footer';

function Wrapper({ children, pageProps }) {
  const [isGnbOpen, setIsGnbOpen] = useState(false);

  const handleChangeGnbOpen = () => {
    setIsGnbOpen(!isGnbOpen);
  };

  return (
    <>
      <div className={`wrap ${isGnbOpen ? '' : 'overflow-hidden'}`}>
        <div id="wrap" className={`wrap2 ${isGnbOpen ? 'gnb--active ' : ''}`}>
          <Gnb handleChangeGnbOpen={handleChangeGnbOpen} />
          <Header handleChangeGnbOpen={handleChangeGnbOpen} />

          <div className="main">{children}</div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Wrapper;
