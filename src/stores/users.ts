import {create} from 'zustand';
import {User} from '@types/user';

interface UserStore {
  user: User;
  setUser: (userInfo: User) => void;
}

const useUserStore = create<UserStore>(set => ({
  user: {},
  setUser: user => set(() => ({user})),
}));

export default useUserStore;
