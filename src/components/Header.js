import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../Utilits/firebase";
import { addUserCredentials, removeUser } from "../Utilits/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const naviagte = useNavigate();

  const handleSignIn = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        naviagte("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, photoURL, displayName, email } = user;
        dispatch(
          addUserCredentials({
            uid: uid,
            photoURL: photoURL,
            displayName: displayName,
            email: email,
          })
        );
        naviagte("/browser");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        naviagte("/");
      }
      return () => unSubscribe();
    });
  }, []);
  return (
    <div className="w-screen p-4 absolute z-10 bg-gradient-to-b from-black flex  justify-between">
      <div className="">
        <img
          className="w-52"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <div className="m-4">
        <button
          className="bg-indigo-600 text-white p-4 rounded-lg font-bold"
          onClick={handleSignIn}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
