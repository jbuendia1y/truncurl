import { useEffect, useState } from 'react';
import { AuthCtx } from '../contexts';
import { AuthCtxValue } from '../contexts/auth.context';
import { AuthService } from '../services';

const AuthProvider = (props: { children: any }) => {
  const [auth, setAuth] = useState<Omit<Omit<AuthCtxValue, 'login'>, 'logout'>>(
    {
      user: undefined,
      token: undefined,
    }
  );

  useEffect(() => {
    const authService = new AuthService();
    authService
      .profile()
      .then((v) => {
        setAuth({
          token: authService.token,
          user: v,
        });
      })
      .catch((_) => {
        setAuth({
          user: null,
          token: null,
        });
      });
  }, []);

  const login: AuthCtxValue['login'] = async (username, password) => {
    const authService = new AuthService();

    const { access_token, user } = await authService.login(username, password);

    setAuth({
      token: access_token,
      user,
    });
  };

  const logout: AuthCtxValue['logout'] = async () => {
    const authService = new AuthService();
    await authService.logout();

    setAuth({
      token: null,
      user: null,
    });
  };

  return (
    <AuthCtx.Provider value={{ ...auth, login, logout }}>
      {props.children}
    </AuthCtx.Provider>
  );
};

export default AuthProvider;
