import React from 'react';
import cc from 'classcat';
import css from './SponsorsPage.scss';
import {speakers} from "../../../shared/data";
import TitleHero from "../../components/TitleHero/TitleHero";
import RowContainer from "../../components/RowContainer/RowContainer";

interface SponsorsPageProps {
}

const SponsorsPage: React.FC<SponsorsPageProps> = () => {
  return (
    <div className={cc(['container', css.SponsorsPage])}>
      <TitleHero title="2019" subTitle="Our Proud Sponsors"/>
      <div className={css.SponsorList}>
        <RowContainer count={4} fold={false} items={speakers}/>
      </div>
    </div>
  );
}

export default SponsorsPage;
