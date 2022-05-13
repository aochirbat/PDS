import create from "zustand";

interface authState {
  auth: boolean;
  login: () => void;
  logOut: () => void;
}

const useAuth = create<authState>((set) => ({
  auth: false,
  login: () => set({ auth: true }),
  logOut: () => set({ auth: false }),
}));

export default useAuth;
