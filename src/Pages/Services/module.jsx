import React, { useState } from 'react';
import './module.css';

const Modal = ({ isOpen, onClose, role }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>

        <h2>Sign Up as {role}</h2>
        <form>
          {role === "Client" && (
            <>
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter your email" />
              <input type="text" placeholder="Enter your home address" />
              <input type="text" placeholder="Enter your phone number" />
              <textarea placeholder="Describe your needs"></textarea>
            </>
          )}
          {role === "Contractor" && (
            <>
              <input type="text" placeholder="Enter your company name" />
              <input type="email" placeholder="Enter your company email" />
              <input type="text" placeholder="Enter your office address" />
              <input type="text" placeholder="Enter your phone number" />
              <textarea placeholder="Describe your services and expertise"></textarea>
            </>
          )}
          {role === "Labour" && (
            <>
              <input type="text" placeholder="Enter your name" />
              <input type="email" placeholder="Enter your email" />
              <input type="text" placeholder="Enter your skillset" />
              <textarea placeholder="Describe your work experience"></textarea>
            </>
          )}
          <button type="submit">Sign Up as {role}</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;