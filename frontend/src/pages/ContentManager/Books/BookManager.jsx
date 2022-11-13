import { useEffect, useState } from 'react'
import ToastContainer from 'react-bootstrap/ToastContainer'
import Toast from 'react-bootstrap/Toast'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { BiEdit, BiTrash } from 'react-icons/bi'
import { GrFormView, GrFormViewHide } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import {
  getUserBooks,
  reset as resetBooks,
} from '../../../features/books/booksSlice'
import Spinner from '../../../components/Spinner'

const BookManager = () => {
  const dispatch = useDispatch()

  const toastInitialState = {
    visibility: false,
    title: '',
    message: '',
    variant: 'primary',
  }

  const [toast, setToast] = useState(toastInitialState)

  const dismissToast = () => setToast({ visibility: false })

  const { books, isLoading, isError, message } = useSelector(
    (state) => state.books
  )

  useEffect(() => {
    dispatch(getUserBooks())
  }, [dispatch])

  useEffect(() => {
    if (isError) {
      setToast({
        visibility: true,
        title: 'Something went wrong',
        message: message,
        variant: 'danger',
      })
    }

    return () => {
      dispatch(resetBooks())
    }
  }, [isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }
  return (
    <>
      {books.length > 0 && (
        <section>
          <h2>Your Books</h2>
          <Table>
            <thead>
              <th>Title</th>
              <th>Author</th>
              <th>Price</th>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book._id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.price}</td>
                  <td>
                    <ButtonGroup>
                      <Button variant="dark" title="Edit">
                        <BiEdit />
                      </Button>
                      <Button variant="danger" title="Delete">
                        <BiTrash />
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
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
        </section>
      )}
    </>
  )
}

export default BookManager
