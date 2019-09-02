import React, {useState} from 'react';
import cc from 'classcat';
import css from './HomeSpeakers.scss';
import TitleHero from "../../../../components/TitleHero/TitleHero";
import HoverButton from "../../../../components/HoverButton/HoverButton";
import {speakers} from "../../../../../shared/data";
import RowContainer from "../../../../components/RowContainer/RowContainer";

interface HomeSpeakersProps {
}

const HomeSpeakers: React.FC<HomeSpeakersProps> = () => {
  const [isFold, fold] = useState(true);
  return (
    <div className={cc(['container', css.HomeSpeakers])}>
      <TitleHero title="2019" subTitle="16 Speakers"/>
      <div className={css.SpeakerList}>
        <RowContainer count={4} fold={isFold} items={speakers}/>
      </div>
      <div className={css.ButtonWrap}>
        <HoverButton
          title="스피커 모두 보기"
          filled={false}
          onClick={() => fold(!isFold)}
        />
      </div>
    </div>
  );
}

export default HomeSpeakers;
