import { Link } from "react-router-dom"
import { FieldValues, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AppSchema } from "../../schema"
import Input from "../../components/input"
import { onRegister } from "../../apiClient/post"

export const Register = () => {
  const { register, handleSubmit, formState: { errors, isLoading } } = useForm<FieldValues>({
    resolver: zodResolver(AppSchema.registerSchema)
  })

  return (
    <div>
      <h4 className="text-3xl">Register</h4>
      <form onSubmit={handleSubmit(onRegister)}>
        <Input
          id="email"
          label="Enter Email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <Input
          id="username"
          label="Enter User Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        <Input
          id="password"
          label="Enter Password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />

        {isLoading ? (
          <h4>Loading ........</h4>
        ) : (
          <button type="submit">Submit</button>
        )}
      </form>
      <div>
        <p> Already have an account ?</p>
        <Link to="/login" >Login here</Link>
      </div>
    </div>
  )
}


