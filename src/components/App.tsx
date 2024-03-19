import React from 'react';
import { HeaderMobile, HeaderLaptop } from './header/Header';
import './Reset.module.scss';
import Style from './App.module.scss';
import { Main } from './Main/Main';
import './Fonts.module.scss';
import { useMediaQuery } from 'react-responsive';
import { Mouse } from './MouseScroll';
import { About } from './about/about';

export const App = () => {
  const isLaptop = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:1020px)',
  });

  return (
    <div className={Style.container}>
      <div className={Style.Background}></div>
      {isLaptop && <HeaderLaptop />}
      {isMobile && <HeaderMobile />}
      <Main />
      <About />
      {/* {isLaptop && <Mouse />} */}
    </div>
  );
};
