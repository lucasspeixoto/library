export type OktaConfig = {
  clientId: string;
  issuer: string;
  redirectUri: string;
  scopes: string[];
  pkce: boolean;
  disableHttpsCheck: boolean;
};
