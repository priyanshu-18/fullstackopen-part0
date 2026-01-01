import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import About from './components/About'

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">home</Link> | <Link to="/users">users</Link> | <Link to="/about">about</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
