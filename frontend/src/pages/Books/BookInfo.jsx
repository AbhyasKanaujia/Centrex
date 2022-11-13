import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { BiPhoneCall } from 'react-icons/bi'
import { BsFillChatLeftTextFill } from 'react-icons/bs'
import { getBook, reset } from '../../features/books/booksSlice'
import Spinner from '../../components/Spinner'
import ToastContainer from 'react-bootstrap/ToastContainer'
import Toast from 'react-bootstrap/Toast'
import { useParams } from 'react-router-dom'

function BookInfo() {
  const dispatch = useDispatch()
  const { id } = useParams()

  const toastInitialState = {
    visibility: false,
    title: '',
    message: '',
    variant: 'primary',
  }

  const [toast, setToast] = useState(toastInitialState)

  const dismissToast = () => setToast({ visibility: false })

  const { books, isSuccess, isLoading, isError, message } = useSelector(
    (store) => store.books
  )

  useEffect(() => {
    dispatch(getBook(id))
  }, [dispatch, id])

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
      <Row>
        {/* <Col>Product Image</Col> */}
        <Col>
          <h1>{books[0].title}</h1>
          <h4>{books[0].author}</h4>
          <p>ISBN: {books[0].isbn}</p>
          <div className="d-flex  justify-content-end">
            <Button className="ms-2">
              <BiPhoneCall />
            </Button>
            <Button className="ms-2">
              <BsFillChatLeftTextFill /> Chat
            </Button>
          </div>
        </Col>
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

export default BookInfo
