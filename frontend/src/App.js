import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Landing, Login, Register } from './pages'

function App() {
  return (
    <Router className="centrex">
      <Routes>
        <Route path="/" element={<Landing />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} exact />
      </Routes>
    </Router>
  )
}

export default App
