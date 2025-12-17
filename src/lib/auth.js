import { getAuth, signInWithCustomToken } from "firebase/auth";

/**
 * Signs in the user to Firebase using their wallet address.
 */
export async function signInWithWallet(address) {
  const auth = getAuth();

  try {
    // 1. Request a custom token from your backend
    const response = await fetch('/api/auth/create-token', {
      method: 'POST',
      body: JSON.stringify({ address }),
      headers: { 'Content-Type': 'application/json' },
    });

    const { token } = await response.json();

    // 2. Sign in to Firebase with that token
    const userCredential = await signInWithCustomToken(auth, token);
    console.log("✅ Firebase Auth Success:", userCredential.user.uid);
    
    return userCredential.user;
  } catch (error) {
    console.error("❌ Auth Error:", error);
    throw error;
  }
}
