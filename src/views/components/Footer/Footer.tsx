import React from 'react';
import Link from 'next/link';
import cc from 'classcat';
import css from './Footer.scss';

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className={css.Footer}>
      <div className={cc(['container', css.Content])}>
        <div className={css.SNS}>
          <div className={css.Title}>FOLLOW US</div>
          <div className={css.Links}>
            <a target="_blank" href="https://www.facebook.com/feconf.kr">Facebook</a>
            <a target="_blank" href="https://www.youtube.com/channel/UCWEzfYIpFBIG5jh6laXC6hA">Youtube</a>
            <a target="_blank" href="mailto:feconf@googlegroups.com">Mail</a>
          </div>
        </div>
        <div className={css.Info}>
          <div className={css.Links}>
            <Link href="/organizers"><a>FEConf 2019 Organizers</a></Link>
            <span> / </span>
            <Link href="/coc"><a>Our Code of Conduct</a></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
