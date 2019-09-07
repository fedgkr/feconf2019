import React, {useState} from 'react';
import css from './HomeSponsors.scss';
import TitleHero from "../../../../components/TitleHero/TitleHero";
import HoverButton from "../../../../components/HoverButton/HoverButton";
import cc from "classcat";
import useResponsive from "../../../../../shared/hooks/useResponsive";
import Viewable from "../../../../components/Viewable/Viewable";
import Sponsors from "../../../../components/Sponsors/Sponsors";

interface HomeSponsorsProps {
}

const HomeSponsors: React.FC<HomeSponsorsProps> = () => {
  const [isFold, fold] = useState(true);
  const {isMobile} = useResponsive();
  return (
    <Viewable>
      <div className={cc(['container', css.HomeSponsors])}>
        <TitleHero title="2019" subTitle="Our Proud Sponsors"/>
        <div className={css.SponsorList}>
          <Sponsors/>
        </div>
        {/*{isFold ?*/}
        {/*  <div className={css.ButtonWrap}>*/}
        {/*    <HoverButton*/}
        {/*      title="스폰서 모두 보기"*/}
        {/*      filled={false}*/}
        {/*      width={isMobile ? "100%" : 300}*/}
        {/*      onClick={() => fold(!isFold)}*/}
        {/*    />*/}
        {/*  </div> : null*/}
        {/*}*/}
      </div>
    </Viewable>
  );
}

export default HomeSponsors;
