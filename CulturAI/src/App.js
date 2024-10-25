// src/App.js
import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import PasswordReset from './components/PasswordReset';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <div>
      <h1>Firebase Authentication</h1>
      <SignIn />
      <SignUp />
      <PasswordReset />
      <UserProfile />
    </div>
  );
};

export default App;