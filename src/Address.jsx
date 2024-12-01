import React from 'react';
import './Address.css';

function Address() {
  return (
    <>
      <header className="header">
        <button className="back-button" aria-label="Go Back">
          <img src="src/assets/back.png" alt="Back" />
        </button>
        <h1>Address</h1>
      </header>
      <div className="add-address">
        + ADD NEW ADDRESS
      </div>
      <main className="login-box">
        <form>
          <input type="text" placeholder="Name" aria-label="Name" required />
          <input type="text" placeholder="Mobile" aria-label="Mobile" required />
          <input type="text" placeholder="Pincode" aria-label="Pincode" required />
          <input type="text" placeholder="State" aria-label="State" required />
          <textarea
            placeholder="Address (House No, Building, Street, Area)"
            aria-label="Address"
            required
          />
          <textarea placeholder="Locality/Town" aria-label="Locality" required />
          <input type="text" placeholder="City/District" aria-label="City" required />
          <button type="submit"><b>Save</b></button>
        </form>
      </main>
    </>
  );
}

export default Address;
