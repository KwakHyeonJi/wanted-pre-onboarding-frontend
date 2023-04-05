import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import useInputs from '../hooks/useInputs'
import { signIn } from '../api/auth'
import { isValidEmail, isValidPassword } from '../utils/validations'

const SignIn = () => {
    const navigate = useNavigate()
    const { accessToken, updateAccessToken } = useAuthContext()
    const {
        values: { email, password },
        handleChange,
    } = useInputs({ email: '', password: '' })
    const [error, setError] = useState('')

    const handleSignIn = async (e) => {
        e.preventDefault()
        try {
            const { access_token } = await signIn(email, password)
            updateAccessToken(access_token)
            navigate('/todo')
        } catch (error) {
            setError('로그인 실패')
        }
    }

    useEffect(() => {
        if (accessToken !== null) {
            navigate('/todo')
        }
    }, [accessToken])

    return (
        <main>
            <h1>로그인</h1>
            <form onSubmit={handleSignIn}>
                <input type='text' name='email' value={email} onChange={handleChange} data-testid='email-input' />
                <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    data-testid='password-input'
                />
                <button
                    type='submit'
                    disabled={!isValidEmail(email) || !isValidPassword(password)}
                    data-testid='signin-button'
                >
                    로그인
                </button>
                {error}
            </form>
        </main>
    )
}

export default SignIn
