import React from 'react';
import css from './CloseBtn.scss';

interface CloseBtnProps {
}

const CloseBtn: React.FC<CloseBtnProps> = () => {
  return (
    <div className={css.CloseBtn}>
      <div/>
      <div/>
      <div/>
    </div>
  );
}

export default CloseBtn;
