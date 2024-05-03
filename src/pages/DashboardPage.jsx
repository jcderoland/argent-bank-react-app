import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector hook
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AccountCard from '../components/AccountCard';

const UserDashboardPage = () => {
  const userName = useSelector(state => state.auth.user.userName); // Access the userName from the Redux store

  return (
    <div>
      <NavBar />
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />{userName}!</h1> {/* Dynamically display the userName */}
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <AccountCard
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <AccountCard
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <AccountCard
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
      <Footer />
    </div>
  );
};

export default UserDashboardPage;
