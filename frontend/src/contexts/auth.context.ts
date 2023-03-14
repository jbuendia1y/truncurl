import { createContext } from 'react';
import { IUser } from '../models';

export interface AuthCtxValue {
  user: undefined | null | IUser;
  token: undefined | null | string;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthCtx = createContext<AuthCtxValue>({
  user: null,
  token: null,
  login(username, password) {
    return Promise.reject('Login method not implemented');
  },
  logout() {
    return Promise.reject('Logout method not implemented');
  },
});

export default AuthCtx;
