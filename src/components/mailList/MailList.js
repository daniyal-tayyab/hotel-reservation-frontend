import React from "react";

import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail-list">
      <h3 className="mail-title">Save time, save money!</h3>
      <span className="mail-description">
        Sign up and we will send you the best deals to you
      </span>
      <div className="mail-container">
        <input type="email" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
