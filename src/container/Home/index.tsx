import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>
      <h4>Home Container</h4>
      <Link to="/login">login</Link>
      <Link to="/register">register</Link>
    </div>
  )
}
