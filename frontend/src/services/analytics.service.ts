import { Analytics, FilterAnalytics } from '../models/analytics';
/* 
    {
      id: 'MY_GOOGLE_LINK_ID',
      url: 'https://google.com',
      hash: 'google-hash',
      createdAt: new Date(),
      name: 'Google',
      userId: 'MY_USER_ID',
    },

*/
export class AnalyticsService {
  analytics: Analytics = {
    moreVisits: [
      {
        count: 500,
        link: {
          id: 'MY_FACEBOOK_LINK_ID',
          url: 'https://facebook.com',
          hash: 'facebook-hash',
          createdAt: new Date(),
          name: 'Facebook',
          userId: 'MY_USER_ID',
        },
      },
    ],
    usedDevices: [
      {
        count: 100,
        device: 'Android',
      },
    ],
    visitsPerDay: [
      {
        count: 100,
        date: new Date(),
      },
    ],
  };

  async getAnalytics(filter?: FilterAnalytics): Promise<Analytics> {
    return this.analytics;
  }
}
