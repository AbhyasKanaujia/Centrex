import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Registration from './pages/Registration'
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <>
      <Router>
        <Container fluid>
          <Routes>
            <Route path="/" element={<Dashboard />} exact />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
          </Routes>
        </Container>
      </Router>
    </>
  )
}

export default App
