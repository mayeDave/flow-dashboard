import { create } from "zustand";

type User = {
  name: string;
  email: string;
  avatar?: string;
};

type AppState = {
  user: User | null;

  sidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;

  setUser: (user: User) => void;
};

export const useAppStore = create<AppState>((set) => ({
  user: {
    name: "Charlene Reed",
    email: "charlene@gmail.com",
  },

  sidebarOpen: false,

  openSidebar: () => set({ sidebarOpen: true }),
  closeSidebar: () => set({ sidebarOpen: false }),

  setUser: (user) => set({ user }),
}));
