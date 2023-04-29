import { instance } from './apiConfig'

const signUp = (email: string, password: string) =>
  instance.post('/auth/signup', {
    email,
    password
  })

const signIn = (
  email: string,
  password: string
): Promise<{
  access_token: string
}> =>
  instance.post('/auth/signin', {
    email,
    password
  })

export { signUp, signIn }
