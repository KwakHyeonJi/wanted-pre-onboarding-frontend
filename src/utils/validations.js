const isValidEmail = (email) => email.match(/.*@.*/)
const isValidPassword = (password) => password.match(/.{8,}/)

export { isValidEmail, isValidPassword }
