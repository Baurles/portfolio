import React from 'react';
import { useEffect } from 'react';
import HeaderStyle from './Header.module.scss';
import { motion, useScroll } from 'framer-motion';
import { buttonsHover } from './HeaderAnimations';
import { SpiningText } from './HeaderAnimations';
import HeaderStore from '@/stores/HeaderStore';
import { observer } from 'mobx-react-lite';

export const HeaderLaptop = observer(() => {
  const { sticky } = HeaderStore;

  useEffect(() => {
    const handleScroll = () => {
      sticky(true);
      console.log(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }); /////Исправить, имя класса не меняется какого то xуя. Для стики

  return (
    <motion.div className={HeaderStyle.header}>
      <SpiningText />

      <ul className={HeaderStyle.list}>
        <motion.li whileHover={buttonsHover} whileTap={{ scale: 0.95 }}>
          about
        </motion.li>
        <motion.li whileHover={buttonsHover} whileTap={{ scale: 0.95 }}>
          services
        </motion.li>
        <motion.li whileHover={buttonsHover} whileTap={{ scale: 0.95 }}>
          projects
        </motion.li>
        <motion.li whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <motion.button
            whileHover={{ backgroundColor: 'red', color: 'white' }}
          >
            Lets Talk
          </motion.button>
        </motion.li>
      </ul>
    </motion.div>
  );
});

export const HeaderMobile = observer(() => {
  return (
    <div className={HeaderStyle.header}>
      <SpiningText />
    </div>
  );
});

// https://colorhunt.co/palette/b4b4b8c7c8cce3e1d9f2efe5
