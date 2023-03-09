import { IUser } from '../models';

export class AuthService {
  // Handle Token
  private _token = localStorage.getItem('AUTH_TOKEN');

  get token() {
    return this._token;
  }
  set token(value: string | null) {
    if (!value) {
      localStorage.removeItem('AUTH_TOKEN');
    } else localStorage.setItem('AUTH_TOKEN', value);
    this._token = value;
  }

  // Handle user
  private _user: IUser | undefined | null = JSON.parse(
    localStorage.getItem('AUTH_USER') || 'null'
  );

  get user() {
    return this._user;
  }
  set user(value: IUser | undefined | null) {
    localStorage.setItem(
      'AUTH_USER',
      JSON.stringify(value === undefined ? null : value)
    );
    this._user = value;
  }

  async profile() {
    if (!this.token) throw new Error('Cannot get the user token');
    if (this.token && this.user) return this.user;

    const user = await Promise.resolve<IUser>({
      firstName: 'Example',
      lastName: 'Example',
      username: 'example',
      email: 'example@example.com',
    });
    this.user = user;
    return this.user;
  }

  async login(username: string, password: string) {
    const { access_token, user } = await Promise.resolve<{
      access_token: string;
      user: IUser;
    }>({
      access_token: 'MY_TOKEN',
      user: {
        firstName: 'Example',
        lastName: 'Example',
        username,
        email: 'example@example.com',
      },
    });

    this.token = access_token;
    this.user = user;
    return {
      access_token,
      user,
    };
  }
  async logout() {
    this.token = null;
    this.user = null;
  }
}
