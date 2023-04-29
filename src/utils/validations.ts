const isValidEmail = (email: string) => email.match(/.*@.*/)
const isValidPassword = (password: string) => password.match(/.{8,}/)

export { isValidEmail, isValidPassword }
