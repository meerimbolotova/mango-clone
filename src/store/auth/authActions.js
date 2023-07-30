import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearErrors, setEmailError, setPasswordError } from "./authSlice";
import fire from "../../fire";

export const handleSignUp = createAsyncThunk(
  "@auth/handleSignUp",
  async (obj, { dispatch }) => {
    dispatch(clearErrors());
    await fire
      .auth()
      .createUserWithEmailAndPassword(obj.email, obj.password)
      .then(() => {
        obj.navigate("/home");
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
