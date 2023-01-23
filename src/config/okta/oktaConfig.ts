export const oktaConfig = {
  issuer: 'https://dev-92179978.okta.com/oauth2/default',
  clientId: '0oa827gfcuqS9pTaT5d7',
  redirectUri: window.location.origin + '/login/callback',
  scopes: ['openid', 'profile', 'email'],
  onAuthRequired: false,
  pkce: true,
};
