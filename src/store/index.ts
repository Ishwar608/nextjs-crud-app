import { create } from "zustand";

type Store = {
  users: string[];
  addUser: (name: string) => void;
  deleteUser: (index: number) => void;
};

export const useStore = create<Store>((set) => ({
  users: [],
  addUser: (name) => set((state) => ({ users: [...state.users, name] })),
  deleteUser: (index) =>
    set((state) => ({
      users: state.users.filter((_, i) => i !== index),
    })),
}));
