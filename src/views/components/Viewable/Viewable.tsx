import React, {useCallback, useEffect, useRef, useState} from 'react';
import cc from 'classcat';
import css from './Viewable.scss';

interface ViewableProps {
}

export function useInteraction() {
  const [visible, setVisible] = useState(false);
  const wrapperEl = useRef<HTMLDivElement>(null);
  const onIntersecting = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(({ isIntersecting }) => {
      if (isIntersecting) {
        setVisible(true);
      }
    });
  }, []);
  useEffect(() => {
    const options = { threshold: 0, rootMargin: '0px 0px -70px 0px' };
    const io = new IntersectionObserver(onIntersecting, options);
    io.observe(wrapperEl.current);
  }, []);
  return {
    wrapperEl,
    visible,
  };
}

const Viewable: React.FC<ViewableProps> = ({ children }) => {
  const { wrapperEl, visible } = useInteraction();
  return (
    <div ref={wrapperEl} className={cc([css.Viewable, visible ? css.appear : ''])}>
      { children }
    </div>
  );
}

export default Viewable;
