// src/authService.js
import { auth } from "./App"; // Adjust if needed based on where Firebase is initialized
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  return currentUser;
}
