import { useState } from "react";
import { signOut } from "../../apiClient/post";

export const Navbar = () => {
  const [isAuth, _setIsAuth] = useState(true);
  return (
    <nav className="flex items-center justify-between">
      <h4>Navbar Page</h4>
      {isAuth ? (
        <div>
          <h4>islogged is</h4>
          <button onClick={signOut}>Logout</button>
        </div>
      ) : (
        <div>
          <h4>is not logged is</h4>
          <button onClick={signOut}>Logout</button>
        </div>
      )}
    </nav>
  )
}
