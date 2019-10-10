import React from 'react';
import cc from 'classcat';
import css from './CloseBtn.scss';

interface CloseBtnProps {
  isStatic?: boolean;
}

const CloseBtn: React.FC<CloseBtnProps> = ({ isStatic = false }) => {
  return (
    <div className={cc([css.CloseBtn, isStatic ? css.static : ''])}>
      <div/>
      <div/>
      <div/>
    </div>
  );
}

export default CloseBtn;
