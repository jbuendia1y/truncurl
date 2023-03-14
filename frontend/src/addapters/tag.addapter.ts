import { IEndpointTag, ITag } from '../models';

export function createTagAddapted(ed: IEndpointTag): ITag {
  return {
    id: ed._id,
    name: ed.name,
    userId: ed.user_id,
  };
}
