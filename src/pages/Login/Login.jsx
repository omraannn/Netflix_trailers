import "./login.scss";
import { useDispatch, useSelector } from "react-redux";
import { setSignIn } from "../../redux/signInSlice";
import SignUpScreen from "./SignUpScreen";
import { useEffect } from "react";
import { auth } from "../../../FB";
import { login, logout } from "../../redux/userSlice";
import { Navigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const signIn = useSelector((state) => state.signIn.signIn);
  const user = useSelector((state) => state.user.user);

  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  if (user) {
    return <Navigate to="/client/home" />;
  }
  return (
    <div className="loginScreen_body">
      {signIn ? (
        <SignUpScreen />
      ) : (
        <>
          <h1>Unlimited filmms, TV programs and more.</h1>
          <h2>Find the best movies & TV shows with our trailers</h2>
          <h3>Ready to watch? Enter your Email to create your membership</h3>
          <div className="loginScreen_body-input">
            <form>
              <input type="email" placeholder="Email Address" required />
              <button
                onClick={() => {
                  dispatch(setSignIn());
                }}
                className="loginScreen_body-input-getstarted"
              >
                GET STARTED
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
