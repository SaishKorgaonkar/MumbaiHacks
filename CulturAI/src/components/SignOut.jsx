import { signOut } from "firebase/auth";

const handleSignOut = async () => {
  try {
    await signOut(auth);
    alert("Signed out successfully!");
  } catch (error) {
    alert("Error signing out: " + error.message);
  }
};