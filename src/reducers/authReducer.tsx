import create from "zustand";

interface authState {
  auth: boolean;

  login: () => void;
  logOut: () => void;
  access_token: string;
  setAccessToken: (access_token: string) => void;
}

const useAuth = create<authState>((set) => ({
  auth: false,
  access_token: "",
  login: () => set({ auth: true }),
  logOut: () => set({ auth: false }),
  setAccessToken: (access_token) => set(() => ({ access_token: access_token })),
}));

export default useAuth;
