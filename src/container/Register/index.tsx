import AuthLayout from "../../layout/auth"

export const Register = () => {
  const firstBody = (
    <div>
      <h4>Register</h4>
      <input placeholder="hello world" />
    </div>
  )
  return (
    <AuthLayout firstBody={firstBody}>
    </AuthLayout>
  )
}
