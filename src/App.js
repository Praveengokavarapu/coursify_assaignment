// App.js

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import JobPostForm from './components/JobPostForm'


import './App.css'

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/post" element={<JobPostForm/>} />
      
    </Routes>
  </Router>
)

export default App