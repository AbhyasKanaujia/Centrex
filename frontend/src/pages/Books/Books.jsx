import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Col from 'react-bootstrap/esm/Col'
import Form from 'react-bootstrap/esm/Form'
import InputGroup from 'react-bootstrap/esm/InputGroup'
import Row from 'react-bootstrap/esm/Row'
import { BiBookAdd } from 'react-icons/bi'
import LinkContainer from 'react-router-bootstrap/LinkContainer'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getBooks, reset } from '../../features/books/booksSlice'
import Spinner from '../../components/Spinner'
import ToastContainer from 'react-bootstrap/ToastContainer'
import Toast from 'react-bootstrap/Toast'
import Card from 'react-bootstrap/Card'
import { BiPhoneCall } from 'react-icons/bi'
import { BsFillChatLeftTextFill } from 'react-icons/bs'

const Books = () => {
  const dispatch = useDispatch()

  const toastInitialState = {
    visibility: false,
    title: '',
    message: '',
    variant: 'primary',
  }

  const [toast, setToast] = useState(toastInitialState)

  const dismissToast = () => setToast({ visibility: false })

  const { books, isSuccess, isLoading, isError, message } = useSelector(
    (state) => state.books
  )

  useEffect(() => {
    dispatch(getBooks())
  }, [dispatch])

  useEffect(() => {
    if (isError) {
      setToast({
        visibility: true,
        title: 'Something went wrong',
        message,
        variant: 'danger',
      })
    }

    dispatch(reset())
  }, [isError, isSuccess, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <Form>
        <Col md={10} lg={8} className="mx-auto">
          <Row>
            <Col className="px-1">
              <InputGroup className="my-2">
                <Form.Control type="text"></Form.Control>
                <Button>Search</Button>
              </InputGroup>
            </Col>
            <Col xs="auto px-1">
              <Form.Group className="my-2">
                <LinkContainer to="/books/add">
                  <Button>
                    <BiBookAdd /> Add my Book
                  </Button>
                </LinkContainer>
              </Form.Group>
            </Col>
          </Row>
        </Col>
      </Form>
      <h1 className="my-3">Latest Books</h1>
      <Row xs={1} md={2} lg={4} className="g-2">
        {books.map((book) => (
          <Col key={book._id}>
            <Card>
              <Card.Body>
                <LinkContainer
                  to={`/books/${book._id}`}
                  style={{ cursor: 'pointer' }}
                >
                  <Row>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>{book.author}</Card.Text>
                  </Row>
                </LinkContainer>
                <div className="d-flex  justify-content-end">
                  <Button className="ms-2">
                    <BiPhoneCall />
                  </Button>
                  <Button className="ms-2">
                    <BsFillChatLeftTextFill /> Chat
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
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

export default Books
