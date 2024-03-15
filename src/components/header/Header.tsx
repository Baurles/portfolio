import React from 'react';
import HeaderStyle from './Header.module.scss';
import { useMediaQuery } from 'react-responsive';
import { SpiningText } from './HeaderAnimations';
import { HeaderMobile, HeaderLaptop } from './HeaderAdaptive';
import HeaderStore from '@/stores/HeaderStore';
import { observer } from 'mobx-react-lite';

export const Header = observer(() => {
  const isLaptop = useMediaQuery({
    query: '(min-width:1024px)',
  });

  const isMobile = useMediaQuery({
    query: '(max-width:1024px)',
  });

  const { isHovered, hovered } = HeaderStore;

  return (
    <header
      className={HeaderStyle.container}
      onMouseOver={() => hovered(true)}
      onMouseOut={() => hovered(false)}
    >
      {isLaptop && <HeaderLaptop />}

      {isMobile && isHovered && <HeaderMobile />}

      {isMobile && !isHovered && <SpiningText />}
    </header>
  );
});

// https://colorhunt.co/palette/b4b4b8c7c8cce3e1d9f2efe5
