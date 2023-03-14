export interface IEndpointTag {
  _id: string;
  name: string;
  user_id: string;
}

export interface ITag {
  id: string;
  name: string;
  userId: string;
}

export interface ICreateTag {
  name: string;
}

export interface TagFilter {
  name?: string;
}
