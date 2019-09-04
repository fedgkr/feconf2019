import create from 'zustand'
import {Speaker} from "../interfaces";
import {speakers} from "../data";

interface ModalTypeParam {
  mobileMenu?: boolean;
  speakerDetail?: boolean;
}

const modalTypes = {
  mobileMenu: false,
  speakerDetail: false,
};

export const modalStore = create((set, get) => ({
  modalOpened: false,
  types: modalTypes,
  selectedSpeaker: null,
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
  openSpeakerDetailModal: (param: ModalTypeParam, speaker: Speaker) => set(() => {
    (get() as any).openModal(param);
    return {
      selectedSpeaker: speaker,
    };
  }),
  changeSpeaker: (speaker: Speaker, step: 1 | -1) => set(state => {
    const idx = speakers.indexOf(speaker);
    let nextIdx = idx + step;
    if (nextIdx === -1) {
      nextIdx = speakers.length - 1;
    } else if (nextIdx >= speakers.length) {
      nextIdx = 0;
    }
    const nextSpeaker = speakers[nextIdx];
    set({ selectedSpeaker: nextSpeaker });
  })
}));

export const useModal = modalStore[0];
export const useModalApi = modalStore[1];
