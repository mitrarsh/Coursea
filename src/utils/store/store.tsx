import { create } from "zustand";

interface MenuState {
  menuIsOpen: boolean;
  openMenu: () => void;
  setOpenBar: (bar: string) => void;
  openBar: string;
}

export const useMenuStore = create<MenuState>((set) => ({
  menuIsOpen: false,
  openMenu: () => {
    set((state) => ({
      menuIsOpen: !state.menuIsOpen,
    }));
  },
  openBar: "overview",
  setOpenBar: (bar: string) =>
    set(() => ({
      openBar: bar,
    })),
}));
