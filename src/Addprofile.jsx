import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1 className="header-text">Add Your Profile</h1>
      </header>
      <main className="login-box">
        <form>
          <input type="text" placeholder="Name" aria-label="Name" required />
          <input type="text" placeholder="Availability" aria-label="Availability" required />
          <input type="text" placeholder="Phone Number" aria-label="Phone Number" required />
          <textarea placeholder="Skills and Techniques" aria-label="Skills and Techniques" required />
          <textarea placeholder="Experience and Achievements" aria-label="Experience and Achievements" required />
          <textarea placeholder="Design Specialities" aria-label="Design Specialities" required />
          <textarea placeholder="Education and Training" aria-label="Education and Training" required />
          <textarea placeholder="Social Media Links (optional)" aria-label="Social Media Links" />
          <button type="submit">Sign Up</button>
        </form>
      </main>
    </>
  );
}

export default App;
