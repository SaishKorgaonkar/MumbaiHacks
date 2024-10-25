// src/auth.js
import { auth } from './config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

// Sign Up Function
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user; // User signed up
  } catch (error) {
    console.error("Error signing up:", error);
    throw error;
  }
};

// Sign In Function
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; // User signed in
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

// Sign Out Function
export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("User  signed out");
  } catch (error) {
    console.error("Error signing out:", error);
    throw error;
  }
};