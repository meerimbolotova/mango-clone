import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  clearErrors,
  clearInputs,
  setChangeEmailError,
  setChangePasswordError,
  setEmailError,
  setPasswordError,
  setUser,
  setUserInfo,
} from "./authSlice";
import fire from "../../fire";

export const handleSignUp = createAsyncThunk(
  "@auth/handleSignUp",
  async (obj, { dispatch }) => {
    dispatch(clearErrors());
    await fire
      .auth()
      .createUserWithEmailAndPassword(obj.email, obj.password)
      .then(() => {
        obj.navigate("/login");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            dispatch(setEmailError(err.message));
            break;
          case "auth/weak-password":
            dispatch(setPasswordError(err.message));
            break;
        }
      });
  }
);

export const handleLogin = createAsyncThunk(
  "@auth/handleLogin",
  async (obj, { dispatch }) => {
    dispatch(clearErrors());
    await fire
      .auth()
      .signInWithEmailAndPassword(obj.email, obj.password)
      .then(() => {
        obj.navigate("/");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/user-disavled":
          case "auth/invalid-email":
          case "auth/user-not-found":
            dispatch(setEmailError(err.message));
            break;
          case "auth/wrong-password":
            dispatch(setPasswordError(err.message));
            break;
        }
      });
  }
);

export const authListener = createAsyncThunk(
  "@auth/authListener",
  async (_, { dispatch }) => {
    await fire.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(clearInputs());
        dispatch(setUser(user?.email));
      } else {
        dispatch(setUser(""));
      }
    });
  }
);

export const handleLogout = createAsyncThunk(
  "@auth/authListener",
  async (navigate) => {
    await fire.auth().signOut();
    navigate("/login");
  }
);

export const getAuthInfo = createAsyncThunk(
  "@auth/getAuthInfo",
  async (_, { dispatch }) => {
    const user = fire.auth().currentUser;
    console.log(user.email);
    if (user.email) {
      dispatch(setUserInfo(user.email));
    } else {
      dispatch(setUserInfo(""));
    }
  }
);

export const changeEmail = createAsyncThunk(
  "@auth/changeEmail",
  async (newEmail) => {
    await fire
      .auth()
      .currentUser.updateEmail(newEmail)
      .then(() => {
        setChangeEmailError("Почта изменена!");
      })
      .catch((err) => {
        setChangeEmailError(err.message);
        console.log(err.message);
      });
  }
);

export const changePassword = createAsyncThunk(
  "@auth/changePassword",
  async (newPassword) => {
    await fire
      .auth()
      .currentUser.updatePassword(newPassword)
      .then(() => {
        setChangePasswordError("Пароль изменён!");
      })
      .catch((err) => {
        setChangePasswordError(err.message);
      });
  }
);
