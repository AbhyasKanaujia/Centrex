import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Form from 'react-bootstrap/esm/Form'
import Col from 'react-bootstrap/esm/Col'
import InputGroup from 'react-bootstrap/esm/InputGroup'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
// import { addBook } from '../../features/books/booksSlice'

function AddBook() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    price: '',
    isbn: '',
  })

  const { title, author, price, isbn } = formData

  const onChange = (e) => {
    setFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    // dispatch(addBook(formData))
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((store) => store.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login?redirect=/books/add')
    }
  }, [user, navigate])

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
          <Form.Group className="my-3">
            <Button className="w-100 ">Add my Book</Button>
          </Form.Group>
        </Col>
      </Form>
    </>
  )
}

export default AddBook
