import React, { useEffect, useState } from 'react'
import './LeaderboardPage.css'

function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/leaderboard') // Make sure backend is running
      .then(res => res.json())
      .then(data => setLeaderboard(data))
      .catch(err => console.error('Failed to load leaderboard', err))
  }, [])

  return (
    <div className="leaderboard-container">
      <h1> Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Intern Name</th>
            <th>Donations Raised (₹)</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.donations}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LeaderboardPage
