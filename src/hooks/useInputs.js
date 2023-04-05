import { useState } from 'react'

const useInputs = (initialValue) => {
    const [values, setValues] = useState(initialValue)

    const handleChange = (e) => {
        const { name, value } = e.target
        setValues((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    return { values, handleChange }
}

export default useInputs
