import React from 'react';
import cc from 'classcat';
import css from './FloatingMobileBtn.scss';
import {applyLink} from "../../../shared/data";

interface FloatingMobileBtnProps {
  visible: boolean
}

const FloatingMobileBtn: React.FC<FloatingMobileBtnProps> = ({ visible }) => {
  return (
    <a
      href={applyLink}
      className={cc([css.FloatingMobileBtn, 'kr-text', visible ? css.visible : ''])}
    >
      참가 신청하기
    </a>
  );
}

export default FloatingMobileBtn;
