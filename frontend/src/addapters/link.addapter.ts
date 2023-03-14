import { IEndpointLink, ILink } from '../models';

export function createLinkAddapted(ed: IEndpointLink): ILink {
  return {
    id: ed._id,
    name: ed.name,
    url: ed.url,
    hash: ed.hash,
    createdAt: new Date(ed.created_at),
    userId: ed.user_id,
  };
}
