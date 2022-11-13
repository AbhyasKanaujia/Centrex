import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ToastContainer from 'react-bootstrap/ToastContainer'
import Toast from 'react-bootstrap/Toast'
import { createBook, reset } from '../../features/books/booksSlice'
import Spinner from '../../components/Spinner'

function AddBook() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const toastInitialState = {
    visibility: false,
    title: '',
    message: '',
    variant: 'primary',
  }

  const [toast, setToast] = useState(toastInitialState)

  const dismissToast = () => setToast({ visibility: false })

  const { user } = useSelector((store) => store.auth)
  const { isLoading, isSuccess, isError, message } = useSelector(
    (store) => store.books
  )

  useEffect(() => {
    if (!user) {
      navigate('/login?redicrect=/books/add')
    }

    if (isError) {
      setToast({
        visibility: true,
        title: 'Something went wrong',
        message,
        variant: 'danger',
      })
    }

    if (isSuccess) {
      navigate('/books')
    }

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isSuccess, isError, message, dispatch])

  const [formdData, setFormdData] = useState({
    title: '',
    author: '',
    price: '',
    isbn: '',
    imageURL: '',
  })

  const { title, author, price, isbn, imageURL } = formdData

  const onChange = (e) => {
    setFormdData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const bookData = {
      title,
      author,
      price,
      isbn,
      imageURL,
    }

    dispatch(createBook(bookData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <h1>Sell a book</h1>
      <p>Post a book that you don't need anymore.</p>

      <Form onSubmit={(e) => onSubmit(e)}>
        <Col md="8" lg="6" className="mx-auto">
          <Form.Group className="my-2">
            <Form.Control
              type="text"
              placeholder="Book Title"
              onChange={(e) => onChange(e)}
              name="title"
              value={title}
              id="title"
            />
          </Form.Group>
          <Form.Group className="my-2">
            <Form.Control
              type="text"
              placeholder="Author"
              onChange={(e) => onChange(e)}
              name="author"
              value={author}
              id="author"
            />
          </Form.Group>
          <InputGroup className="my-2">
            <InputGroup.Text>₹</InputGroup.Text>
            <Form.Control
              type="Number"
              min={0}
              placeholder="Price"
              onChange={(e) => onChange(e)}
              name="price"
              value={price}
              id="price"
            />
          </InputGroup>
          <Form.Group className="my-2">
            <Form.Control
              type="text"
              placeholder="ISBN"
              onChange={(e) => onChange(e)}
              name="isbn"
              value={isbn}
              id="isbn"
            />
          </Form.Group>
          <Form.Group className="my-2">
            <Form.Control
              type="url"
              placeholder="Book Cover URL"
              onChange={(e) => onChange(e)}
              name="imageURL"
              value={imageURL}
              id="imageURL"
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Button type="submit" className="w-100 ">
              Add my Book
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

export default AddBook
