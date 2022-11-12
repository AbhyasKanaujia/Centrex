import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row'
import { BiUser } from 'react-icons/bi'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/esm/Col'
import Button from 'react-bootstrap/esm/Button'

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

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (store) => store.auth
  )

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
  }

  return (
    <>
      <Row className="my-3">
        <h1 className="text-center">
          <BiUser /> Register
        </h1>
        <p className="text-center">Please create an account</p>
      </Row>
      <Row className="justify-content-center">
        <Form as={Col} md="8" lg="6" onSubmit={(e) => onSubmit(e)}>
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
            <Button className="w-100">Create an account</Button>
          </Form.Group>
        </Form>
      </Row>
    </>
  )
}

export default Register
