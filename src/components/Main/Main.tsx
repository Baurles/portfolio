import React from 'react';
import MainStyle from './Main.module.scss';
import { motion } from 'framer-motion';
import { TextSpan } from './MainAnimation';

const sentenceFrontend = 'FRONTEND';
const sentenceWeb = 'WEB';
const sentenceDev = 'DEV';

export const Main = () => {
  return (
    <div className={MainStyle.container}>
      <div className={MainStyle.Background}></div>
      <div className={MainStyle.wellcome}>
        <div className={MainStyle.wellcomeF}>
          {' '}
          {sentenceFrontend.split('').map((char, index) => (
            <motion.span
              id="target"
              key={index}
              style={{ display: 'inline-block' }}
              whileHover={{ scale: 1.2 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
        <div className={MainStyle.wellcomeW}>
          {' '}
          {sentenceWeb.split('').map((char, index) => (
            <motion.span
              id="target"
              key={index}
              style={{ display: 'inline-block' }}
              whileHover={{ scale: 1.2 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
        <div className={MainStyle.wellcomeD}>
          {' '}
          {sentenceDev.split('').map((char, index) => (
            <motion.span
              id="target"
              key={index}
              style={{ display: 'inline-block' }}
              whileHover={{ scale: 1.2 }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};
