import { ILink } from './link.model';

export interface IMoreVisit {
  link: ILink;
  count: number;
}

export interface IUsedDevice {
  device: string;
  count: number;
}

export interface VisitPerDay {
  count: number;
  date: Date;
}

export interface FilterAnalytics {
  linkId?: string;
}

export interface Analytics {
  moreVisits: IMoreVisit[];
  usedDevices: IUsedDevice[];
  visitsPerDay: VisitPerDay[];
}
