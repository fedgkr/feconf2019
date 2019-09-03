import {useCallback, useEffect, useState} from "react";

export const MOBILE_BREAK_POINT = 720;

export default function useResponsive() {
  const [isMobile, setMobile] = useState(false);
  const onResize = useCallback(() => {
    const val = window.innerWidth <= MOBILE_BREAK_POINT;
    if (isMobile !== val) {
      setMobile(val);
    }
  }, [isMobile]);
  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  });
  return { isMobile };
}
