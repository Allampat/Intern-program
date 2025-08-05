import React, { useEffect, useState } from 'react'
import './DashboardPage.css'

function DashboardPage() {
  const [internData, setInternData] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/api/intern') // Backend endpoint
      .then(res => res.json())
      .then(data => setInternData(data))
      .catch(err => console.error('Failed to fetch intern data:', err))
  }, [])

  if (!internData) {
    return <div className="dashboard">Loading intern data...</div>
  }

  return (
    <div className="dashboard">
      <h1>Welcome, {internData.name} </h1>
      <div className="card">
        <p><strong>Referral Code:</strong> {internData.referralCode}</p>
        <p><strong>Total Donations Raised:</strong> ₹{internData.totalDonations}</p>
      </div>

      <div className="rewards">
        <h2> Rewards & Unlockables</h2>
        <ul>
          <li> Bronze Badge – ₹1,000 Raised</li>
          <li> Silver Badge – ₹5,000 Raised</li>
          <li> Free T-shirt – ₹10,000 Raised</li>
        </ul>
      </div>
    </div>
  )
}

export default DashboardPage
