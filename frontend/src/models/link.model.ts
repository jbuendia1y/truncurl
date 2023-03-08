export interface IEndpointLink {
  name?: string;
  url: string;
  hash: string;
  user_id: string;
  created_at: string;
}

export interface ICreateLink {
  url: string;
  name?: string;
}

export interface ILink {
  id: string;
  name?: string;
  url: string;
  hash: string;
  userId: string;
  createdAt: Date;
}

export interface LinkFilter {
  name?: string;
  url?: string;
  hash?: string;
  createdAt?: {
    $gt: Date;
    $lt: Date;
  };
}
