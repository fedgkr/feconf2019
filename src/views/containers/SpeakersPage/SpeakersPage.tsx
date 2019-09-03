import React from 'react';
import css from './SpeakersPage.scss';
import TitleHero from "../../components/TitleHero/TitleHero";
import {speakers} from "../../../shared/data";
import cc from "classcat";
import RowContainer from "../../components/RowContainer/RowContainer";
import useResponsive from "../../../shared/hooks/useResponsive";

interface SpeakersPageProps {
}

const SpeakersPage: React.FC<SpeakersPageProps> = () => {
  const {isMobile} = useResponsive();
  console.log('isMobile : ', isMobile);
  return (
    <div className={cc(['container', css.SpeakersPage])}>
      <TitleHero title="2019" subTitle="Speakers" />
      <div className={css.SpeakerList}>
        <RowContainer count={4} fold={false} items={speakers}/>
      </div>
    </div>
  );
}

export default SpeakersPage;
