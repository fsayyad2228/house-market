import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { db } from "../firebase.config";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import {toast} from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const OAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const onGoogleAuthHandler = async () => {
    try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth,provider);
        const user = result.user;
        const docRef = doc(db,'users',user.uid);
        const docSnap = await getDoc(docRef);
        if(!docSnap.exists()){
            await setDoc(doc(db,'users',user.uid),{
                name:user.displayName,
                email:user.email,
                timestamp:serverTimestamp(),
            });
        }
        navigate('/')
    } catch (error) {
        toast.error("Something Went Wrong");
    }
  };
  return (
    <div>
      <h6 className="mt-2">
        Sign {location.pathname === "/signup" ? "Up" : "in"} With &nbsp;
        <button onClick={onGoogleAuthHandler}>
          <FcGoogle />
        </button>
      </h6>
    </div>
  );
};

export default OAuth;