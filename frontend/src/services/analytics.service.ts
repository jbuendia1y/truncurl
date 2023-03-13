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
      {
        count: 400,
        link: {
          id: 'MY_GOOGLE_LINK_ID',
          url: 'https://google.com',
          hash: 'google-hash',
          createdAt: new Date(),
          name: 'Google',
          userId: 'MY_USER_ID',
        },
      },
      {
        count: 450,
        link: {
          id: 'MY_INSTAGRAM_LINK_ID',
          url: 'https://instagram.com',
          hash: 'instagram-hash',
          createdAt: new Date(),
          name: 'Instagram',
          userId: 'MY_USER_ID',
        },
      },
      {
        count: 300,
        link: {
          id: 'MY_PINTEREST_LINK_ID',
          url: 'https://pinterest.com',
          hash: 'pinterest-hash',
          createdAt: new Date(),
          name: 'Pinterest',
          userId: 'MY_USER_ID',
        },
      },
      {
        count: 100,
        link: {
          id: 'MY_WORDPRESS_LINK_ID',
          url: 'https://wordpress.com',
          hash: 'wordpress-hash',
          createdAt: new Date(),
          name: 'Wordpress',
          userId: 'MY_USER_ID',
        },
      },
    ],
    usedDevices: [
      {
        count: 500,
        device: 'Android',
      },
      {
        count: 100,
        device: 'Apple',
      },
      {
        count: 450,
        device: 'Windows',
      },
      {
        count: 50,
        device: 'Linux',
      },
      {
        count: 100,
        device: 'Mac',
      },
    ],
    visitsPerDay: [
      {
        count: 1000,
        date: new Date('02/01/22'),
      },
      {
        count: 400,
        date: new Date('02/02/22'),
      },
      {
        count: 600,
        date: new Date('02/03/22'),
      },
      {
        count: 500,
        date: new Date('02/04/22'),
      },
      {
        count: 700,
        date: new Date('02/05/22'),
      },
    ],
  };

  async getAnalytics(filter?: FilterAnalytics): Promise<Analytics> {
    return this.analytics;
  }
}
