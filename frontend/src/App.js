import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Landing, Login, Register } from './pages'
import { Header, Footer } from './components'

function App() {
  return (
    <Router className="centrex">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} exact />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
