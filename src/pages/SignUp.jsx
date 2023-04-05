import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import useInputs from '../hooks/useInputs'
import { signUp } from '../api/auth'
import { isValidEmail, isValidPassword } from '../utils/validations'

const SignUp = () => {
    const navigate = useNavigate()
    const { accessToken } = useAuthContext()
    const {
        values: { email, password },
        handleChange,
    } = useInputs({ email: '', password: '' })
    const [error, setError] = useState('')

    const handleSignUp = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            navigate('/signin')
        } catch (error) {
            setError('회원가입 실패')
        }
    }

    useEffect(() => {
        if (accessToken !== null) {
            navigate('/todo')
        }
    }, [accessToken])

    return (
        <main>
            <h1>회원가입</h1>
            <form onSubmit={handleSignUp}>
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
                    data-testid='signup-button'
                >
                    회원가입
                </button>
                {error}
            </form>
        </main>
    )
}

export default SignUp
