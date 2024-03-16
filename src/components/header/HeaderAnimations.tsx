import React from 'react';
import { motion } from 'framer-motion';
import HeaderStyle from './Header.module.scss';

const text = `ARTEM KHMARUK`;

const defaultAnimationsLetters = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const buttonsHover = {
  scale: 1.05,
  backgroundColor: '#222222',
  color: 'white',
};

export const SpiningText = () => {
  return (
    <motion.h1 className={HeaderStyle.logo}>
      <span className="sr-only" style={{ display: 'none' }}>
        {text}
      </span>
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.05 }}
        aria-hidden
      >
        {text.split('').map((char, index) => (
          <motion.span
            id="target"
            key={index}
            style={{ display: 'inline-block' }}
            variants={defaultAnimationsLetters}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    </motion.h1>
  );
};
