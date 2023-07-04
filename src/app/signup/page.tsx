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
    <div
      style={{
        maxWidth: "320px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Temp Login</h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseAuth} />
    </div>
  );
}

export default SignInScreen;
