import React, {useCallback, useEffect, useRef, useState} from 'react';
import css from './Home.scss';
import Hero from "./components/Hero/Hero";
import HomeSpeakers from "./components/HomeSpeakers/HomeSpeakers";
import HomeTracks from "./components/HomeTracks/HomeTracks";
import HomeSponsors from "./components/HomeSponsors/HomeSponsors";
import HomeInfo from "./components/HomeInfo/HomeInfo";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import Footer from "../../components/Footer/Footer";
import FloatingMobileBtn from "../../components/FloatingMobileBtn/FloatingMobileBtn";

interface Props {}

const useFloatBtn = () => {
  const speakerWrapEl = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const onScroll = useCallback(() => {
    if (speakerWrapEl.current) {
      setVisible(pageYOffset > speakerWrapEl.current.clientHeight + speakerWrapEl.current.offsetTop)
    }
  }, []);
  useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return {
    speakerWrapEl,
    visible,
  };
}

const Home: React.FC<Props> = () => {
  const { speakerWrapEl, visible } = useFloatBtn();
  return (
    <div className={css.Home}>
      <Hero/>
      <HomeSpeakers wrapRef={speakerWrapEl} />
      <HomeTracks/>
      <HomeSponsors/>
      <HomeInfo/>
      <HomeBanner/>
      <div className={css.FooterWrap}>
        <Footer/>
      </div>
      <FloatingMobileBtn visible={visible}/>
    </div>
  );
}

export default Home;
