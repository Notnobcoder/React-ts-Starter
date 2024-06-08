import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import AuthLayout from "../../layout/auth"
import { Link } from "react-router-dom";
import { AppSchema } from "../../schema";
import { loginType } from "../../types";
import { onLogin } from "../../apiClient/post";

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<loginType>({
    resolver: zodResolver(AppSchema.loginSchema)
  });

  const firstBody = (
    <div>
      <h4 className="text-3xl">Login Body</h4>
      <form onSubmit={handleSubmit(onLogin)}>
        <input {...register("email")} placeholder="Email" />
        {errors.email?.message && <p className="text-red-900">{errors.email.message}</p>}
        <input {...register("password")} placeholder="Password" />
        {errors.password?.message && <p className="text-red-900">{errors.password.message}</p>}
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>Do Not have an account ?</p>
        <Link to="/register" >register here</Link>
      </div>

    </div>
  )
  return (
    <AuthLayout firstBody={firstBody} >
    </AuthLayout>
  )
}
