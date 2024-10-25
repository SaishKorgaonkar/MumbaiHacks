// src/components/UserProfile.js
import React, { useState, useEffect } from 'react';
import { auth } from '../firebase'; // Adjust the path as necessary
import { updateProfile } from "firebase/auth";

const UserProfile = () => {
  const [displayName, setDisplayName] = useState('');
  const [user, setUser ] = useState(null);

  useEffect(() => {
    const currentUser  = auth.currentUser ;
    if (currentUser ) {
      setUser (currentUser );
      setDisplayName(currentUser .displayName || '');
    }
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (user) {
      try {
        await updateProfile(user, { displayName });
        alert("Profile updated!");
      } catch (error) {
        alert("Error updating profile: " + error.message);
      }
    }
  };

  return (
    <div>
      {user ? (
        <form onSubmit={handleUpdateProfile}>
          <input
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />
          <button type="submit">Update Profile</button>
        </form>
      ) : (
        <p>Please sign in to update your profile.</p>
      )}
    </div>
  );
};

export default UserProfile;