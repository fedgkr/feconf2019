import React from 'react';
import css from './HomeSponsors.scss';
import TitleHero from "../../../../components/TitleHero/TitleHero";
import SpeakerBrief from "../../../SpeakersPage/components/SpeakerBrief/SpeakerBrief";
import HoverButton from "../../../../components/HoverButton/HoverButton";
import cc from "classcat";
import {speakers} from "../../../../../shared/data";
import RowContainer from "../../../../components/RowContainer/RowContainer";

interface HomeSponsorsProps {
}

const HomeSponsors: React.FC<HomeSponsorsProps> = () => {
  return (
    <div className={cc(['container', css.HomeSponsors])}>
      <TitleHero title="2019" subTitle="Our Proud Sponsors"/>
      <div className={css.SponsorList}>
        <RowContainer count={4} fold={true} items={speakers}/>
      </div>
      <div className={css.ButtonWrap}>
        <HoverButton
          title="스폰서 모두 보기"
          filled={false}
        />
      </div>
    </div>
  );
}

export default HomeSponsors;
