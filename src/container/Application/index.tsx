import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../Home"
import { Login } from "../Login"
import { Register } from "../Register"
import { Shop } from "../Shop"
import { Page404 } from "../404"
import { useAuth } from "../../providers/AuthProvider"

export const Application = () => {

  const { isLoggedIn } = useAuth();
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />

        {isLoggedIn && (
          <Route path={"/shop"} element={<Shop />} />
        )}
        <Route path={"/404"} element={<Page404 />} />
        <Route path={"*"} element={<Page404 />} />
      </Routes>

    </>
  )
}
