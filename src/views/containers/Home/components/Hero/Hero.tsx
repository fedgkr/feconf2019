import React from 'react';
import cc from 'classcat';
import css from "./Hero.scss";
import {animated} from "react-spring";
import { MainImage } from "../../../../../static/images/main";
import HoverButton from "../../../../components/HoverButton/HoverButton";
import useResponsive from "../../../../../shared/hooks/useResponsive";
import {applyLink, timeRange, titleWords} from "../../../../../shared/data";

interface HeroProps {
}

const Hero: React.FC<HeroProps> = () => {
  const {isMobile} = useResponsive();
  return (
    <div className={cc([css.Hero])}>
      <div className={css.Wrap}>
        <MainImage/>
        <div className={css.TextWrap}>
          <div className={css.Title}>
            <h3>FE Conference 2019</h3>
            <h3>is for</h3>
            <h2>
              <animated.span>{titleWords[0]}</animated.span>
              <animated.span>{titleWords[1]}</animated.span>
              <animated.span>{titleWords[2]}</animated.span>
              <animated.span>{titleWords[3]}</animated.span>
            </h2>
          </div>
          <p className={cc([css.Info, 'kr-text'])}>
            {timeRange} <br/>
            <a target="_blank" href="https://naver.me/GF26VviE">
              롯데월드타워 SKY 31
            </a>
          </p>
          <HoverButton
            target="_blank"
            title="참가 신청하기"
            href={applyLink}
            width={isMobile ? "100%" : 300}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
