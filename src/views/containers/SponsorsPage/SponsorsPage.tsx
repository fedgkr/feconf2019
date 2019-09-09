import React from 'react';
import cc from 'classcat';
import css from './SponsorsPage.scss';
import TitleHero from "../../components/TitleHero/TitleHero";
import Footer from "../../components/Footer/Footer";
import Sponsors from "../../components/Sponsors/Sponsors";

interface SponsorsPageProps {
}

const SponsorsPage: React.FC<SponsorsPageProps> = () => {
  return (
    <>
      <div className={cc(['container', css.SponsorsPage])}>
        <TitleHero title="2019" subTitle="Our Proud Sponsors"/>
        <div className={css.SponsorList}>
          <Sponsors/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default SponsorsPage;
