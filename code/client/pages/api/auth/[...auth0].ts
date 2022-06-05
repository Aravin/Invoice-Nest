import { handleAuth, handleLogin, LoginOptions, GetLoginState } from '@auth0/nextjs-auth0';
import { NextApiRequest } from 'next';

const getLoginState: GetLoginState = (req: NextApiRequest, loginOptions: LoginOptions) => {
  loginOptions.returnTo = '/account'
  return {};
};

export default handleAuth({
  async login(req, res) {
    await handleLogin(req, res, { getLoginState });
  }
});
