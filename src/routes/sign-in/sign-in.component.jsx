import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  //whenevr u make a call to database it's always asynchronus
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRefc= await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>SignIn page </h1>
      <button onClick={logGoogleUser}> Sign In with Google</button>
    </div>
  );
};

export default SignIn;
