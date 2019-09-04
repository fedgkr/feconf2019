import create from 'zustand'

interface ModalTypeParam {
  mobileMenu?: boolean;
}

const modalTypes = {
  mobileMenu: false,
};

export const modalStore = create(set => ({
  modalOpened: false,
  types: modalTypes,
  openModal: (param: ModalTypeParam) => set(state => ({
    types: {
      ...modalTypes,
      ...param,
    },
    modalOpened: true,
  })),
  closeModal: (param: ModalTypeParam) => set(state => ({
    types: {
      ...modalTypes,
      ...param,
    },
    modalOpened: false,
  })),
}));

export const useModal = modalStore[0];
export const useModalApi = modalStore[1];
