import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase.js";
import { db } from "../services/firebase.js";
import { doc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log(user.name);
  const [loading, setLoading] = useState(true); // optional for loading state

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        console.log("current user", currentUser);
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);
        console.log("usersnap", userSnap.data().name);

        if (userSnap.exists()) {
          setUser({
            uid: currentUser.uid,
            email: currentUser.email,
            ...userSnap.data(),
          });
        } else {
          setUser(currentUser); // fallback to just Firebase user
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
