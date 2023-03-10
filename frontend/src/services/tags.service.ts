import { ICreateTag, ITag, TagFilter } from '../models';

export class TagsService {
  tags: ITag[] = [
    {
      id: 'SOCIAL_TAG_ID',
      name: 'Social',
      userId: 'MY_USER_ID',
    },
    {
      id: 'ENTERPRISE_TAG_ID',
      name: 'Enterprise',
      userId: 'MY_USER_ID',
    },
    {
      id: 'WORK_TAG_ID',
      name: 'Work',
      userId: 'MY_USER_ID',
    },
    {
      id: 'TEST_TAG_ID',
      name: 'Test',
      userId: 'MY_USER_ID',
    },
  ];

  async find(filter?: TagFilter): Promise<ITag[]> {
    return this.tags;
  }

  async create(data: ICreateTag): Promise<ITag> {
    const createdTag: ITag = {
      id: data.name.toLocaleUpperCase() + '_TAG_ID',
      name: data.name,
      userId: 'MY_USER_ID',
    };
    this.tags.push(createdTag);
    return createdTag;
  }

  async update(id: string, data: ICreateTag): Promise<ITag> {
    const tagIdx = this.tags.findIndex((v) => v.id === id);
    const toUpdateTag = this.tags[tagIdx];

    this.tags[tagIdx] = {
      ...toUpdateTag,
      ...data,
    };

    return this.tags[tagIdx];
  }

  async delete(id: string): Promise<ITag> {
    const tagIdx = this.tags.findIndex((v) => v.id === id);
    if (tagIdx === -1) throw new Error('Tag not found');
    const [deletedTag] = this.tags.splice(tagIdx);
    return deletedTag;
  }
}
