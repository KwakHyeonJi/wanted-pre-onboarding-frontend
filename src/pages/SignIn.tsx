import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signIn } from '../api/auth'
import useInputs from '../hooks/useInputs'
import { ACCESS_TOKEN_KEY } from '../types/auth'
import { isValidEmail, isValidPassword } from '../utils/validations'

function SignIn() {
  const navigate = useNavigate()

  const {
    values: { email, password },
    handleChange
  } = useInputs({ email: '', password: '' })

  const [error, setError] = useState('')

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const { access_token } = await signIn(email, password)
      localStorage.setItem(ACCESS_TOKEN_KEY, access_token)
      navigate('/todo')
    } catch (err) {
      setError('로그인 실패')
    }
  }

  const moveSignUpPage = () => navigate('/signup')

  return (
    <main>
      <h1>로그인</h1>
      <form onSubmit={handleSignIn}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          data-testid="email-input"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          data-testid="password-input"
        />
        <button
          type="submit"
          disabled={!isValidEmail(email) || !isValidPassword(password)}
          data-testid="signin-button"
        >
          로그인
        </button>
        {error}
      </form>
      <button type="button" onClick={moveSignUpPage}>
        회원가입
      </button>
    </main>
  )
}

export default SignIn
