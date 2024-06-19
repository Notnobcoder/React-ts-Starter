import { z } from "zod";

const registerSchema = z.object({
  email: z.string().email(),
  username: z.string().min(1, { message: "Required" }),
  password: z.string().min(1, { message: "Required" }),
})


const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: "Required" }),
})



export const AppSchema = { registerSchema, loginSchema }
