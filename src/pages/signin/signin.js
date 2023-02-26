import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";
import { SigninContext } from "../Context/signinContext";

export default function SignIn() {
  const context = useContext(SigninContext);
  const [signIn, setSignIn] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="signinPage">
      <div className="signinDiv">
        <div class="login_container" id="container">
          <div
            class="form-container sign-up-container"
            style={
              signIn !== true
                ? {
                    transform: "translateX(100%)",
                    opacity: "1",
                    zIndex: "5",
                    animation: "show 0.6s",
                  }
                : null
            }
          >
            <form onSubmit={context.signupHandeler} className="signinForm">
              <h1 className="signinTitle">Create Account</h1>
              <input
                type="text"
                placeholder="Username"
                className="signinInput"
                minLength={5}
                onChange={(e) => context.usernameChange(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                className="signinInput"
                minLength={10}
                onChange={(e) => context.emailChange(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="signinInput"
                minLength={5}
                onChange={(e) => context.passwordChange(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm password"
                className="signinInput"
                minLength={5}
                onChange={(e) => context.confirmPasswordChange(e.target.value)}
              />
              <button type="submit" className="signinButton">
                Sign Up
              </button>
            </form>
          </div>
          <div
            class="form-container sign-in-container"
            style={signIn !== true ? { transform: "translateX(100%)" } : null}
          >
            <form
              onSubmit={(e) => context.signinHandeler(e, navigate)}
              className="signinForm"
            >
              <h1 className="signinTitle">Sign in</h1>
              <input
                type="email"
                placeholder="Email"
                className="signinInput"
                name="email"
              />

              <input
                type="password"
                placeholder="Password"
                className="signinInput"
                name="password"
              />
              <button type="submit" className="signinButton">
                Sign In
              </button>
            </form>
          </div>
          <div
            class="overlay-container"
            style={signIn !== true ? { transform: "translateX(-100%)" } : null}
          >
            <div
              class="overlay"
              style={signIn !== true ? { transform: "translateX(50%)" } : null}
            >
              <div
                class="overlay-panel overlay-left"
                style={signIn !== true ? { transform: "translateX(0)" } : null}
              >
                <h1 className="signinTitle">Welcome Back!</h1>
                <p className="signinParagraph">
                  Already have an account? please login with your personal info
                </p>
                <button
                  className="signinButtonGhost"
                  id="signIn"
                  onClick={() => setSignIn(true)}
                >
                  Sign In
                </button>
              </div>
              <div
                class="overlay-panel overlay-right"
                style={
                  signIn !== true ? { transform: "translateX(20%)" } : null
                }
              >
                <h1 className="signinTitle">Hello, Friend!</h1>
                <p className="signinParagraph">
                  Don’t have an account? Enter your personal details and start
                  journey with us
                </p>
                <button
                  className="signinButtonGhost"
                  id="signUp"
                  onClick={() => setSignIn(false)}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
