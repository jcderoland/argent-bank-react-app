import React from 'react';

// AccountCard component displays individual bank account details
const AccountCard = ({ title, amount, description }) => (
  <section className="account">
    <div className="account-content-wrapper">
      <h3 className="account-title">{title}</h3> {/* Display the account title */}
      <p className="account-amount">{amount}</p> {/* Display the account balance */}
      <p className="account-amount-description">{description}</p> {/* Display a description about the account */}
    </div>
    <div className="account-content-wrapper cta">
      <button className="transaction-button">View transactions</button> {/* Button to view account transactions */}
    </div>
  </section>
);

export default AccountCard;
