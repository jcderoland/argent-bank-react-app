import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserName, fetchUserProfile } from '../redux/authSlice';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AccountCard from '../components/AccountCard';

// UserDashboardPage displays user-specific information and allows username updates
const UserDashboardPage = () => {
  const { user, token } = useSelector(state => state.auth); // Access user and token from auth state
  const [editMode, setEditMode] = useState(false); // State to toggle edit mode
  const [newUserName, setNewUserName] = useState(user.userName || ''); // State to store new username

  const dispatch = useDispatch();

  useEffect(() => {
    setNewUserName(user.userName); // Update newUserName when user.userName changes
  }, [user.userName]);

  const handleSave = () => {
    dispatch(updateUserName({
      token, 
      userName: newUserName
    }))
    .then(() => {
      dispatch(fetchUserProfile({ token })); // Fetch updated profile after username change
    })
    .catch((error) => {
      console.error('Failed to update the user name', error);
    });
    setEditMode(false); // Exit edit mode after save
};

  return (
    <div>
      <NavBar />
      <main className="main bg-dark">
        <div className="header">
          {editMode ? (
            <div className="edit-user-info">
              <div className="input-group">
                <label>User name:</label>
                <input
                  type="text"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                />
              </div>
              <div className="input-group">
                <label>First name:</label>
                <input
                  type="text"
                  value={user.firstName}
                  readOnly
                  style={{ backgroundColor: '#e9ecef' }}
                />
              </div>
              <div className="input-group">
                <label>Last name:</label>
                <input
                  type="text"
                  value={user.lastName}
                  readOnly
                  style={{ backgroundColor: '#e9ecef' }}
                />
              </div>
              <button onClick={handleSave} className="save-button">Save</button>
              <button onClick={() => setEditMode(false)} className="cancel-button">Cancel</button>
            </div>
          ) : (
            <>
              <h1>Welcome back<br />{user.userName}!</h1>
              <button onClick={() => setEditMode(true)}>Edit Name</button>
            </>
          )}
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
