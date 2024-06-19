import axios from "axios"
import { SubmitHandler, FieldValues } from "react-hook-form"

const LocalENDPOINT = "http://localhost:8000"

export const onRegister: SubmitHandler<FieldValues> = async (data) => {
  await axios.post(`${LocalENDPOINT}/auth/register`, data).then((res) => {
    console.log(res.data)
    alert("User Registered")
  }).catch((err) => {
    console.log(err)
  })

}

export const onLogin: SubmitHandler<FieldValues> = async (data) => {
  await axios.post(`${LocalENDPOINT}/auth/login`, data, { withCredentials: true }).then(() => {
    alert("Login Successfull")
  }).catch((err) => {
    console.log(err)
  })
}

export const signOut = async () => {
  const response = await fetch(`${LocalENDPOINT}/auth/logout`, {
    credentials: "include",
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Error during sign out");
  }
};
