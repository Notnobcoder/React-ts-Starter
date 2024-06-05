import AuthLayout from "../../layout/auth"

export const Login = () => {
  const firstBody = (
    <div>
      <h4>Login Body</h4>
    </div>
  )
  return (
    <AuthLayout firstBody={firstBody} >
    </AuthLayout>
  )
}
