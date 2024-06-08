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
  await axios.post(`${LocalENDPOINT}/auth/login`, data).then((res) => {
    console.log(res.data)
    localStorage.setItem("authToken", res.data.authentication.sessionToken)
    alert("Login Successfull")


  }).catch((err) => {
    console.log(err)
  })
}
