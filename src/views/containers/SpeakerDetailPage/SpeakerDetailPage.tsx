import React from 'react';
import css from './SpeakerDetailPage.scss';
import {useRouter} from "next/router";

interface SpeakerDetailPageProps {
}

const SpeakerDetailPage: React.FC<SpeakerDetailPageProps> = () => {
  useRouter();
  return (
    <div className={css.SpeakerDetailPage}>

    </div>
  );
}

export default SpeakerDetailPage;
