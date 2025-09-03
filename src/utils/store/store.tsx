import { create } from 'zustand';


interface MenuState{
    menuIsOpen:boolean;
    openMenu:()=>void;
}

export const useMenuStore= create<MenuState>((set)=>({
    menuIsOpen: false,
    openMenu: ()=>{set((state)=>({
        menuIsOpen: !state.menuIsOpen
    }))}
}))


