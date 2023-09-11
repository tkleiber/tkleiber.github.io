var klaroConfig = {
  elementID: 'klaro',
  groupByPurpose: true,
  // privacyPolicy: '/#privacy',
  default: false,
  mustConsent: true,
  acceptAll: true,
  noticeAsModal: true,
  lang: 'en',
translations: {
    en: {
      consentModal: {
        description:
            'Here you can see and customize the information that we collect about you. You can change these cookie settings at any time from the footer of each page.',
      },
      giscus: {
        description: 'Login of users for comments, see https://github.com/giscus/giscus/blob/main/PRIVACY-POLICY.md',
      },
      cloudflare: {
        description: 'Protection against DDoS attacks, https://www.cloudflare.com/privacypolicy',
      },
      purposes: {
        commenting: 'Commenting',
        security: 'Security',
      },
    },
  },
  services: [
    {
      name: 'giscus',
      title: 'giscus',
      purposes: ['commenting'],
      required: true,
    },
    {
      name: 'cloudflare',
      title: 'Cloudflare',
      purposes: ['security'],
      required: true,
    },
  ],
};