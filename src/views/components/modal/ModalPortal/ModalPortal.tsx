import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import ModalLayout from "../ModalLayout/ModalLayout";
import useClientRendering from "../../../../shared/hooks/useClientRendering";
import {useModal} from "../../../../shared/store";
import MobileMenuModal from "../MobileMenuModal/MobileMenuModal";
import SpeakerDetailModal from "../SpeakerDetailModal/SpeakerDetailModal";

interface ModalPortalProps {
}

const ModalPortal: React.FC<ModalPortalProps> = () => {
  const { types: { mobileMenu, speakerDetail }, selectedSpeaker, modalOpened } = useModal();
  const {isClientRendering} = useClientRendering();
  if (isClientRendering && modalOpened) {
    const el = document.getElementById('modal');
    return ReactDOM.createPortal((
      <ModalLayout>
        { mobileMenu && <MobileMenuModal/> }
        { speakerDetail && selectedSpeaker && <SpeakerDetailModal speaker={selectedSpeaker} /> }
      </ModalLayout>
    ), el);
  }
  return null;
}

export default ModalPortal;
