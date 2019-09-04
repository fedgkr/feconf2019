import create from 'zustand'

const store = create(set => ({
  modalOpened: false,
  openModal: () => set(state => ({ modalOpened: true })),
  closeModal: () => set(state => ({ modalOpened: false })),
}));

export const useModal = store[0];
