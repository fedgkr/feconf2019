import React from 'react';
import css from './Home.scss';
import Hero from "./components/Hero/Hero";
import HomeSpeakers from "./components/HomeSpeakers/HomeSpeakers";
import HomeTracks from "./components/HomeTracks/HomeTracks";
import HomeSponsors from "./components/HomeSponsors/HomeSponsors";
import HomeInfo from "./components/HomeInfo/HomeInfo";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import Footer from "../../components/Footer/Footer";
import MobileMenuModal from "../../components/modal/MobileMenuModal/MobileMenuModal";
import ModalPortal from "../../components/modal/ModalPortal/ModalPortal";

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <div className={css.Home}>
      <Hero/>
      <HomeSpeakers/>
      <HomeTracks/>
      <HomeSponsors/>
      <HomeInfo/>
      <HomeBanner/>
      <Footer/>
      <ModalPortal>
        <MobileMenuModal/>
      </ModalPortal>
    </div>
  );
}

export default Home;
