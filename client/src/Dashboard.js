import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // Dummy data for upcoming deadlines
  const deadlines = ['Article 1 - Oct 30', 'Article 2 - Nov 5', 'Article 3 - Nov 12'];

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Upcoming Deadlines:</p>
      <ul>
        {deadlines.map((deadline, index) => (
          <li key={index}>{deadline}</li>
        ))}
      </ul>
      <p>Recent Articles</p>
    </div>
  );
};

export default Dashboard;
