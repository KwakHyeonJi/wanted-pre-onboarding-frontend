import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signUp } from '../api/auth'
import useInputs from '../hooks/useInputs'
import { isValidEmail, isValidPassword } from '../utils/validations'

function SignUp() {
  const navigate = useNavigate()

  const {
    values: { email, password },
    handleChange
  } = useInputs({ email: '', password: '' })

  const [error, setError] = useState('')

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await signUp(email, password)
      navigate('/signin')
    } catch (err) {
      setError('회원가입 실패')
    }
  }

  const moveSignInPage = () => navigate('/signin')

  return (
    <main>
      <h1>회원가입</h1>
      <form onSubmit={handleSignUp}>
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
          data-testid="signup-button"
        >
          회원가입
        </button>
        {error}
      </form>
      <button type="button" onClick={moveSignInPage}>
        로그인
      </button>
    </main>
  )
}

export default SignUp
