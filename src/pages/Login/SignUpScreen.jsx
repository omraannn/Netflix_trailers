import React, { useRef } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../../../FB";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log("User registered successfully:", authUser);
      })
      .catch((error) => {
        console.error("Error registering user:", error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        console.log("User sign in successfully:", authUser);
      })
      .catch((error) => {
        console.error("Error signin  user:", error.message);
      });
  };

  return (
    <div className="signupScreen">
      <form>
        <h1>Sign Up/In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <button onClick={signIn} type="submit">
          Sign In
        </button>

        <h4>
          New to NX.Trailers? <span onClick={register}> Sign Up Now.</span>
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
