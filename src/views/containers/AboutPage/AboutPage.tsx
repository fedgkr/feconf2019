import React from 'react';
import css from './AboutPage.scss';
import cc from "classcat";
import TitleHero from "../../components/TitleHero/TitleHero";
import Intro from "../../components/Intro/Intro";
import CoC from "../../components/CoC/CoC";
import Footer from "../../components/Footer/Footer";

interface AboutPageProps {
}

const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className={css.AboutPage}>
      <div className={cc(['container', css.HomeInfo])}>
        <TitleHero
          title="FE Conference"
          subTitle="Event Information"
        />
        <Intro/>
        <CoC/>
      </div>
      <Footer/>
    </div>
  );
}

export default AboutPage;
