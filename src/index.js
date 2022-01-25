import { StrictMode } from 'react'
import reactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

reactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>
  , document.getElementById('root'))