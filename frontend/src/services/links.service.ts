import { ICreateLink, ILink, LinkFilter } from "../models";

export class LinksService {
  links: ILink[] = [
    {
      id: "MY_GOOGLE_LINK_ID",
      url: "https://google.com",
      hash: "google-hash",
      createdAt: new Date(),
      name: "Google",
      userId: "MY_USER_ID",
    },
    {
      id: "MY_FACEBOOK_LINK_ID",
      url: "https://facebook.com",
      hash: "facebook-hash",
      createdAt: new Date(),
      name: "Facebook",
      userId: "MY_USER_ID",
    },
  ];

  async create(data: ICreateLink): Promise<ILink> {
    const linkCreated: ILink = {
      id: data.url + "_MY_LINK_ID",
      hash: `my-hash-${this.links.length}`,
      createdAt: new Date(),
      url: data.url,
      userId: "MY_USER_ID",
      name: data.name,
    };
    this.links.push(linkCreated);
    return linkCreated;
  }

  async find(filter: LinkFilter): Promise<ILink[]> {
    const filtered = this.links.filter((v) => {
      for (const k of Object.keys(filter)) {
        if (!(filter as any)[k]) continue;
        if ((filter as any)[k] !== (v as any)[k]) return false;
      }
      return true;
    });
    return filtered;
  }

  async update(id: string, data: Partial<ICreateLink>): Promise<ILink> {
    const linkId = this.links.findIndex((v) => v.id === id);
    if (!linkId) throw new Error("Link not exist");
    const link = {
      ...this.links[linkId],
      ...data,
    };
    this.links[linkId] = link;
    return link;
  }

  async delete(id: string): Promise<ILink> {
    const linkId = this.links.findIndex((v) => v.id === id);
    const [deletedLink] = this.links.splice(linkId);
    return deletedLink;
  }
}
