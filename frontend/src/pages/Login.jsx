import { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import { BiLogIn } from 'react-icons/bi'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'

function Login() {
  const [formData, setFormData] = useState({
    emailOrPhone: '',
    password: '',
  })

  const { emailOrPhone, password } = formData

  const onChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
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
        <Form as={Col} md="8" lg="6" onSubmit={(e) => onSubmit(e)}>
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
            <Button className="w-100">Login</Button>
          </Form.Group>
        </Form>
      </Row>
    </>
  )
}

export default Login
