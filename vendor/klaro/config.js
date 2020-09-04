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
      hyvor: {
        description: 'Visit time and read status of users for comments, see https://talk.hyvor.com/docs/privacy',
      },
      cloudflare: {
        description: 'Protection against DDoS attacks, see https://support.cloudflare.com/hc/en-us/articles/200170156-Understanding-the-Cloudflare-Cookies#12345682',
      },
      purposes: {
        commenting: 'Commenting',
        security: 'Security',
      },
    },
  },
  apps: [
    {
      name: 'hyvor',
      title: 'Hyvor Talk',
      purposes: ['commenting'],
      cookies: [
        [/^(authsess)|(talksess)$/, '/', 'talk.hyvor.com'], //for the production version
        [/^(authsess)|(talksess)$/, '/', '127.0.0.1'], //for the local version
        'hyvor_ignore',
      ],
      /*
      callback: function(consent, app) {
        console.log(
            'User consent for app ' + app.name + ': consent=' + consent
        );
        if( consent == false ) {
            // hyvor_talk.reload();
        }
      }
      */
    },
    {
      name: 'cloudflare',
      title: 'Cloudflare',
      purposes: ['security'],
      required: true,
    },
  ],
};