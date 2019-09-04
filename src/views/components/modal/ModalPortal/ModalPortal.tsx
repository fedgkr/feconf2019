import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import ModalLayout from "../ModalLayout/ModalLayout";
import useClientRendering from "../../../../shared/hooks/useClientRendering";
import {useModal} from "../../../../shared/store";

interface ModalPortalProps {
}

const ModalPortal: React.FC<ModalPortalProps> = ({ children }) => {
  const { modalOpened } = useModal();
  const {isClientRendering} = useClientRendering();
  if (isClientRendering && modalOpened) {
    const el = document.getElementById('modal');
    return ReactDOM.createPortal((
      <ModalLayout>
        {children}
      </ModalLayout>
    ), el);
  }
  return null;
}

export default ModalPortal;
