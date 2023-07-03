"use client";
import React from "react";
import { firebaseAuth } from "../../../firebase/config";
import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import StyledFirebaseAuth from "./firebaseui";
const uiConfig = {
  signInSuccessUrl: "/",
  signInOptions: [
    GoogleAuthProvider.PROVIDER_ID,
    EmailAuthProvider.PROVIDER_ID,
  ],
};

function SignInScreen() {
  return (
    <div className='flex min-h-screen justify-center items-center'>
      <div className='pb-60'>
        <h1 className='text-center font-bold'>Temp Login</h1>
        <p className='text-center font-semibold'>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
      </div>
    </div>
  );
}

export default SignInScreen;
