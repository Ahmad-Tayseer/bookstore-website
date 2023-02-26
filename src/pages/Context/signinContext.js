import { useState, useEffect, createContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { encode } from "base-64";
import cookie from "react-cookies";
export const SigninContext = createContext();

export const SigninProvider = (props) => {
  const [signinStatus, setSigninStatus] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [headerName, setHeaderName] = useState("");

  useEffect(() => {
    if (cookie.load("Token")) {
      setSigninStatus(true);
      setHeaderName(cookie.load("User").username);
    }
  }, []);

  const usernameChange = (newUsername) => {
    setUsername(newUsername);
  };

  const emailChange = (email) => {
    setEmail(email);
  };

  const passwordChange = (password) => {
    setPassword(password);
  };

  const confirmPasswordChange = (confirmPassword) => {
    setConfirmPassword(confirmPassword);
  };

  const signupHandeler = async (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Your should enter all data, please try again.",
        showConfirmButton: false,
        timer: 2500,
      });
    } else if (confirmPassword !== password) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Your passwords do not match, please try again.",
        showConfirmButton: false,
        timer: 2500,
      });
    } else {
      await axios
        .post("http://localhost:5000/signup", {
          username: username,
          email: email,
          password: password,
        })
        .then((res) => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "You signed up successfully.",
            showConfirmButton: false,
            timer: 2500,
          });
        })
        .catch((err) => {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Error in siging up!",
            showConfirmButton: false,
            timer: 2500,
          });
        });
      e.target.reset();
    }
  };

  const signinHandeler = async (e, navigate) => {
    e.preventDefault();
    const encoded = encode(
      `${e.target.email.value}:${e.target.password.value}`
    );
    await axios
      .post(
        "http://localhost:5000/signin",
        {},
        {
          headers: {
            Authorization: `basic ${encoded}`,
          },
        }
      )
      .then((res) => {
        setSigninStatus(true);
        cookie.save("Token", res.data.token);
        cookie.save("User", res.data);
        setHeaderName(cookie.load("User").username);
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "You signed in successfully.",
          showConfirmButton: false,
          timer: 2500,
        });
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Email or password is not correct!",
          showConfirmButton: false,
          timer: 2500,
        });
      });
    e.target.reset();
  };

  const signoutHandeler = (e, navigate) => {
    setSigninStatus(false);
    cookie.remove("Token");
    cookie.remove("User");
    navigate("/");
  };

  const state = {
    signinStatus,
    username,
    email,
    password,
    confirmPassword,
    headerName,
    signupHandeler,
    signinHandeler,
    usernameChange,
    emailChange,
    passwordChange,
    confirmPasswordChange,
    signoutHandeler,
  };

  return (
    <SigninContext.Provider value={state}>
      {props.children}
    </SigninContext.Provider>
  );
};
