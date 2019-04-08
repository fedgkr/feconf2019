import React from 'react';
import css from './Footer.scss';

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <div className={css.Footer}>
      <div className="contents">
        <p>
          <span>후원 신청</span><br/>
          <span>후원 문의: <a href="mailto:feconf@googlegroups.com">feconf@googlegroups.com</a></span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
