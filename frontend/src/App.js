import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import { Landing, Login, Register } from './pages'
import { Header, Footer } from './components'

function App() {
  return (
    <Router>
      <div className="centrex">
        <Header />
        <main className="centrex__main">
          <Routes>
            <Route path="/" element={<Landing />} exact />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} exact />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
