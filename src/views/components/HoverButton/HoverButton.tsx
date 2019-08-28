import React from 'react';
import css from './HoverButton.scss';

interface HoverButtonProps {
}

const HoverButton: React.FC<HoverButtonProps> = () => {
  return (
    <a href="#" className={css.HoverButton}>
      스피커 모두 보기
      <div className="extended"/>
    </a>
  );
}

export default HoverButton;
