import React from 'react';
import Link from 'next/link';
import css from './Header.scss';

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={css.Header}>
      <Link href="/">
        <a><img src="/static/images/logo@2x.png" alt="FEConf"/></a>
      </Link>
      <ul className={css.Menu}>
        <li><Link href="/about"><a>About FE 2019</a></Link></li>
        <li><Link href="/speakers"><a>Speakers</a></Link></li>
        <li><Link href="/schedule"><a>Schedule</a></Link></li>
        <li><Link href="/sponsors"><a>Sponsors</a></Link></li>
        <li><Link href="/organizers"><a>Organizers</a></Link></li>
        <a href="/apply"><button>신청하기</button></a>
      </ul>
    </div>
  );
}

export default Header;
