import React from 'react';
import css from './SpeakersPage.scss';
import TitleHero from "../../components/TitleHero/TitleHero";
import {speakers} from "../../../shared/data";
import cc from "classcat";
import RowContainer from "../../components/RowContainer/RowContainer";
import Footer from "../../components/Footer/Footer";

interface SpeakersPageProps {
}

const SpeakersPage: React.FC<SpeakersPageProps> = () => {
  return (
    <>
      <div className={cc(['container', css.SpeakersPage])}>
        <TitleHero title="2019" subTitle="Speakers" />
        <div className={css.SpeakerList}>
          <RowContainer count={4} fold={false} items={speakers}/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default SpeakersPage;
