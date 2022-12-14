import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'
import Books from './pages/Books/Books'
import AddBook from './pages/Books/AddBook'
import BookInfo from './pages/Books/BookInfo'
import UserContent from './pages/ContentManager/UserContent'
import EditBook from './pages/ContentManager/Books/EditBook'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Dashboard />} exact />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/mycontent" element={<UserContent />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/add" element={<AddBook />} />
            <Route path="/books/:id" element={<BookInfo />} />
            <Route path="/books/edit/:id" element={<EditBook />} />
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
