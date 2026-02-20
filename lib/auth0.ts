import { Auth0Client } from '@auth0/nextjs-auth0/server';

export const auth0 = new Auth0Client();
export async function getSession() {
  const session = await auth0.getSession();
  const user = session?.user || null;
  return user;
}
