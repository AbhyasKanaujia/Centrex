import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import { BiUser } from 'react-icons/bi'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'
import Toast from 'react-bootstrap/esm/Toast'
import ToastContainer from 'react-bootstrap/esm/ToastContainer'
import Spinner from '../components/Spinner'
import { register, reset } from '../features/auth/authSlice'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    line1: '',
    line2: '',
    city: '',
    state: '',
    password: '',
    confirmPassword: '',
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

  const {
    name,
    email,
    phone,
    line1,
    line2,
    city,
    state,
    password,
    confirmPassword,
  } = formData

  const onChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setToast({
        visibility: true,
        title: 'Passwords do not match',
        message: 'Please try entering passwords again',
        variant: 'danger',
      })
    } else {
      const userData = {
        name,
        email,
        phone,
        line1,
        line2,
        city,
        state,
        password,
      }

      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Row className="my-3">
        <h1 className="text-center">
          <BiUser /> Register
        </h1>
        <p className="text-center">Please create an account</p>
      </Row>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Col md="8" lg="6" className="mx-auto">
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Name"
              className="my-2"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
          <Row>
            <Form.Group as={Col}>
              <Form.Control
                type="email"
                placeholder="Email"
                className="my-2"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control
                type="tel"
                placeholder="Phone Number"
                className="my-2"
                name="phone"
                value={phone}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
          </Row>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Address Line 1"
              className="my-2"
              name="line1"
              value={line1}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Address Line 2"
              className="my-2"
              name="line2"
              value={line2}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
          <Row>
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="City"
                className="my-2"
                name="city"
                value={city}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control
                type="text"
                placeholder="State"
                className="my-2"
                name="state"
                value={state}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
          </Row>
          <Row>
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
            <Form.Group as={Col}>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                className="my-2"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => onChange(e)}
              />
            </Form.Group>
          </Row>
          <Form.Group className="my-3">
            <Button type="submit" className="w-100">
              Create an account
            </Button>
          </Form.Group>
        </Col>
      </Form>
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

export default Register
