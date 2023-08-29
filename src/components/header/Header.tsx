'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import MobileHeader from './MobileHeader';
import WebHeader from './WebHeader';

const Header = () => {
  const [isMdWidth, setIsMdWidth] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMdWidth(true);
    }
  });

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        setIsMdWidth(true);
      } else {
        setIsMdWidth(false);
      }
    });
  });
  return (
    <>
      <div>{!isMdWidth && <WebHeader />}</div>
      <div>{isMdWidth && <MobileHeader />}</div>
    </>
  );
};

export default Header;
