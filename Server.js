const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

// Dummy intern data
const internData = {
  name: "Sisira Reddy",
  referralCode: "sisira2025",
  totalDonations: 7520,
};

// Dummy leaderboard
const leaderboard = [
  { name: "Anika", donations: 8200 },
  { name: "Sisira Reddy", donations: 7520 },
  { name: "Karan", donations: 6900 },
  { name: "Ishaan", donations: 5800 },
  { name: "Meera", donations: 5400 },
];

app.get('/api/intern', (req, res) => {
  res.json(internData);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboard);
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
