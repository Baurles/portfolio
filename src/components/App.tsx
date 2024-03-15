import React from 'react';
import { Header } from './header/Header';
import './Reset.module.scss';
import Style from './App.module.scss';
import { Main } from './Main';
import './Fonts.module.scss';

export const App = () => {
  return (
    <div className={Style.container}>
      <Header />
      <Main />
    </div>
  );
};
