/* eslint-disable import/no-extraneous-dependencies */
import { create } from 'zustand';

interface UserState {
  userID: string;
  setUserID: (userID: string) => void; // Define the type of setUserID
}

interface TableState {
  actionState: boolean;
  setTableState: () => void; // Define the type of setTableState
}

export const useUserStore = create<UserState>((set) => ({
  userID: '',
  setUserID: (userID) => set({ userID }), // Updated setUserID function
}));

export const useTableStore = create<TableState>((set) => ({
  actionState: false,
  setTableState: () => set((state) => ({ actionState: !state.actionState })),
}));
