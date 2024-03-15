import React from 'react';
import HeaderStyle from './Header.module.scss';
import { motion } from 'framer-motion';
import { buttonsHover } from './HeaderAnimations';
import { SpiningText } from './HeaderAnimations';

export const HeaderMobile = () => {
  return (
    <ul className={HeaderStyle.list}>
      <li>about</li>
      <li>services</li>
      <li>projects</li>
      <li>
        <button>Lets Talk</button>
      </li>
    </ul>
  );
};

export const HeaderLaptop = () => {
  return (
    <div className={HeaderStyle.header}>
      <SpiningText />
      <ul className={HeaderStyle.list}>
        <motion.li whileHover={buttonsHover} whileTap={{ scale: 0.9 }}>
          about
        </motion.li>
        <motion.li whileHover={buttonsHover} whileTap={{ scale: 0.9 }}>
          services
        </motion.li>
        <motion.li whileHover={buttonsHover} whileTap={{ scale: 0.9 }}>
          projects
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <motion.button
            whileHover={{ backgroundColor: '#F2EFE5', color: 'black' }}
          >
            Lets Talk
          </motion.button>
        </motion.li>
      </ul>
    </div>
  );
};
