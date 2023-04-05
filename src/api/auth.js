import client from './apiConfig'

const signUp = (email, password) =>
    client.post('/auth/signup', {
        email,
        password,
    })

const signIn = (email, password) =>
    client.post('/auth/signin', {
        email,
        password,
    })

export { signUp, signIn }
