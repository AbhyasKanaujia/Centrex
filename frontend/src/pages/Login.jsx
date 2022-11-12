import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import { BiLogIn } from 'react-icons/bi'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
import Toast from 'react-bootstrap/esm/Toast'
import ToastContainer from 'react-bootstrap/esm/ToastContainer'
import Spinner from '../components/Spinner'
import { login, reset } from '../features/auth/authSlice'

function Login() {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  })

  const toastInitialState = {
    visibility: false,
    title: '',
    message: '',
    variant: 'primary',
  }

  const [toast, setToast] = useState(toastInitialState)

  const dismissToast = () => setToast({ visibility: false })

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (store) => store.auth
  )

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isSuccess || user) {
      navigate('/')
    }

    if (isError) {
      setToast({
        visibility: true,
        title: 'Something went wrong',
        message,
        variant: 'danger',
      })
    }

    dispatch(reset())
  }, [isError, message, isSuccess, user, navigate, dispatch])

  const { emailOrPhone, password } = formData

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
    return <Spinner />
  }

  return (
    <>
      <Row className="my-3">
        <h1 className="text-center">
          <BiLogIn /> Login
        </h1>
        <p className="text-center">Login and start finding products</p>
      </Row>
      <Row className="justify-content-center">
        <Form md="8" lg="6" onSubmit={(e) => onSubmit(e)}>
          <Form.Group as={Col}>
            <Form.Control
              type="email"
              placeholder="Email or Phone"
              className="my-2"
              name="emailOrPhone"
              value={emailOrPhone}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Control
              type="password"
              placeholder="Password"
              className="my-2"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Button type="submit" className="w-100">
              Login
            </Button>
          </Form.Group>
        </Form>
      </Row>
      <ToastContainer position="top-center" className="p-3">
        <Toast
          show={toast.visibility}
          bg={toast.variant}
          onClose={dismissToast}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <strong className="me-auto">{toast.title}</strong>
          </Toast.Header>
          <Toast.Body>{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  )
}

export default Login
