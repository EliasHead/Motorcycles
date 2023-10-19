import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { db } from '@/lib/db'

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db as any),
  providers: [
    GithubProvider({
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      clientId: process.env.GITHUB_CLIENTID!,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'elias@email.com' },
        password: { label: 'Password', type: 'password' },
        username: { label: 'Name', type: 'text', placeholder: 'Elias Costa' },
      },
      async authorize(credentials, req): Promise<any> {
        console.log('authorize method', credentials)
        const user = {
          email: 'elias@mail.com',
          password: '123456',
          name: 'Elias costa',
        }

        return user
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.SECRET,
  debug: process.env.NODE_ENV === 'development',
}
