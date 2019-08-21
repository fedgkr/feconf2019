import React from 'react';
import css from './Header.scss';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={css.Header}>
      <img src="/static/images/logo@2x.png" alt="FEConf"/>
      <ul className={css.Menu}>
        <li><a href="/about">About FE 2019</a></li>
        <li><a href="/speakers">Speakers</a></li>
        <li><a href="/schedule">Schedule</a></li>
        <li><a href="/sponsors">Sponsors</a></li>
        <li><a href="/organizers">Organizers</a></li>
        <a href="/apply"><button>신청하기</button></a>
      </ul>
    </div>
  );
}

export default Header;
