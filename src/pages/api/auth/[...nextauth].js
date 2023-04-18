import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const options = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',

      async authorize(credentials) {
        const res = await fetch('http://127.0.0.1:5000/api/v1/login', {
          method: 'POST',
          body: JSON.stringify(credentials),
          headers: { 'Content-Type': 'application/json' }
        })
        const data = await res.json()

        if (res.ok && data.access_token) {
          return { id: data.access_token }
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    jwt: async ({token, user}) => {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session: async ({session, token}) => {
      session.user.id = token.id
      return session
    }
  },
  secret: process.env.SECRET,
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => NextAuth(req, res, options)
