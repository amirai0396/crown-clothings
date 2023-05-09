import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  //whenevr u make a call to database it's always asynchronus
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>SignIn page </h1>
      <button onClick={logGoogleUser}> Sign In with Google</button>
    </div>
  );
};

export default SignIn;
