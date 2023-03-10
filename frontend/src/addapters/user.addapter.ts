import { IEndpointUser, IUser } from '../models';

export function createUserAddapted(ed: IEndpointUser): IUser {
  return {
    firstName: ed.first_name,
    lastName: ed.last_name,
    email: ed.email,
    username: ed.username,
  };
}
