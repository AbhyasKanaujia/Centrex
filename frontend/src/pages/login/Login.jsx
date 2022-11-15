import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login, reset } from '../../features/auth/authSlice'

import { mountainBg } from '../../assets'
import './login.css'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  })

  const { emailOrPhone, password } = formData

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (store) => store.auth
  )
  useEffect(() => {
    if (isSuccess || user) {
      navigate('/')
    }

    if (isError) {
      alert(message)
    }

    dispatch(reset())
  }, [isError, message, isSuccess, user, navigate, dispatch])

  const onChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      emailOrPhone,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div style={{ backgroundImage: `url(${mountainBg})` }} className="login">
      <div className="login__floater">
        <h1 className="login__header">Welcome Back</h1>
        <p className="login__prompt">Please enter your credentials</p>
        <form onSubmit={(e) => onSubmit(e)} className="login__form">
          <input
            type="text"
            name="emailOrPhone"
            id="emailOrPhone"
            value={emailOrPhone}
            onChange={(e) => onChange(e)}
            className="login__text-input"
            placeholder="Email or Phone Number"
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => onChange(e)}
            className="login__text-input"
            placeholder="Password"
          />
          <button className="login__button" type="submit">
            sing in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
