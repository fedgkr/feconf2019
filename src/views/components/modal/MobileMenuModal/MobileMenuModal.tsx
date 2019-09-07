import React from 'react';
import Link from 'next/link';
import cc from 'classcat';
import css from './MobileMenuModal.scss';
import {useModal} from "../../../../shared/store";

interface MobileMenuModalProps {
}

const MobileMenuModal: React.FC<MobileMenuModalProps> = () => {
  const { closeModal } = useModal();
  return (
    <div className={cc([css.MobileMenuModal, 'wrap', 'container'])} onClick={e => {
      e.stopPropagation();
    }}>
      <div className={css.Header}>
        <Link href="/">
          <a><img src="/static/images/logo@2x.png" alt="FEConf"/></a>
        </Link>
        <a href="#" onClick={e => {
          e.preventDefault();
          closeModal();
        }}>
          <div className={css.Hamburger}>
            <div/>
            <div/>
            <div/>
          </div>
        </a>
      </div>
      <ul className={css.Menu}>
        <li><Link href="/speakers"><a>Speakers</a></Link></li>
        <li><Link href="/schedule"><a>Schedule</a></Link></li>
        <li><Link href="/sponsors"><a>Sponsors</a></Link></li>
        <li><Link href="/about"><a>Event Information</a></Link></li>
      </ul>
    </div>
  );
}

export default MobileMenuModal;
