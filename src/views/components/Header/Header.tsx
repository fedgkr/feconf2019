import React from 'react';
import Link from 'next/link';
import css from './Header.scss';
import HoverButton from "../HoverButton/HoverButton";
import useResponsive from "../../../shared/hooks/useResponsive";
import {useModal} from "../../../shared/store";
import {applyLink} from "../../../shared/data";

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
  const { openModal } = useModal();
  const {isMobile} = useResponsive();
  return (
    <div className={css.Header}>
      <Link href="/">
        <a><img src="/static/images/logo@2x.png" alt="FEConf"/></a>
      </Link>
      {isMobile ?
        <a href="#" onClick={e => {
          e.preventDefault();
          openModal({ mobileMenu: true });
        }}>
          <div className={css.Hamburger}>
            <div/>
            <div/>
            <div/>
          </div>
        </a> :
        <ul className={css.Menu}>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/speakers"><a>Speakers</a></Link></li>
          <li><Link href="/schedule"><a>Schedule</a></Link></li>
          <li><Link href="/sponsors"><a>Sponsors</a></Link></li>
          <li><Link href="/facility"><a>Facility Guide</a></Link></li>
          <HoverButton
            style={{
              fontSize: 14,
              padding: '14px 0 13px 0'
            }}
            target="_blank"
            href={applyLink}
            title="신청하기"
            width={103}
            filled={false}
          />
        </ul>
      }
    </div>
  );
}

export default Header;
