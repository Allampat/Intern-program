import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'

function LoginPage() {
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // No auth, just redirect
    navigate('/dashboard')
  }

  return (
    <div className="login-container">
      <h1>Intern Portal Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage
