import React, {useState} from 'react';
import css from './HomeSponsors.scss';
import TitleHero from "../../../../components/TitleHero/TitleHero";
import HoverButton from "../../../../components/HoverButton/HoverButton";
import cc from "classcat";
import {speakers} from "../../../../../shared/data";
import RowContainer from "../../../../components/RowContainer/RowContainer";

interface HomeSponsorsProps {
}

const HomeSponsors: React.FC<HomeSponsorsProps> = () => {
  const [isFold, fold] = useState(true);
  return (
    <div className={cc(['container', css.HomeSponsors])}>
      <TitleHero title="2019" subTitle="Our Proud Sponsors"/>
      <div className={css.SponsorList}>
        <RowContainer count={4} fold={isFold} items={speakers}/>
      </div>
      <div className={css.ButtonWrap}>
        <HoverButton
          title="스폰서 모두 보기"
          filled={false}
          onClick={() => fold(!isFold)}
        />
      </div>
    </div>
  );
}

export default HomeSponsors;
