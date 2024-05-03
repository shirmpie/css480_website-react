import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home.jsx'
import { ThingsToRead } from './pages/thingsToRead.jsx'
import { Layout } from './Layout.jsx'
import { Navbar } from './components/NavBar.jsx'
import ListGroup from './components/ListGroup.jsx'


function App() {
  return (
    <div>
      

      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/things_to_read" element={<ThingsToRead />} />
          </Route>
        </Routes>
      </Router>
      

    </div>
  )
}

export default App
