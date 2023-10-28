import React, { useState } from 'react';

const ArticlePlanning = () => {
  const [topic, setTopic] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`New Topic: ${topic}, Deadline: ${deadline}`);
  };

  return (
    <div>
      <h1>Article Planning</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Article Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ArticlePlanning;
