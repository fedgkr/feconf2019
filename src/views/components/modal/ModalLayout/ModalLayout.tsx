import React from 'react';
import css from './ModalLayout.scss';
import {useModal} from "../../../../shared/store";

interface ModalLayoutProps {
}

const ModalLayout: React.FC<ModalLayoutProps> = ({ children }) => {
  const { closeModal } = useModal();
  return (
    <div
      className={css.ModalLayout}
      onClick={() => closeModal()}
      onTouchMove={e => e.preventDefault()}
    >
      {children}
    </div>
  );
}

export default ModalLayout;
