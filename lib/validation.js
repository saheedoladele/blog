import { z } from "zod"


export const UserSchema = z.object({
    email: z.string().email("Inavalid email address"),
   
    fullName: z
    .string()
    .min(3, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),

    password: z.string().min(2, {
        message: "Password field must not be empty.",
      }),
    
      passwordConfirm: z.string().min(2, {
      message: "Password field must not be empty.",
    }),

   

  })

  export const AuthSchema = z.object({
    email: z.string().min(2, {
      message: "Email field must not be empty.",
    }),
    password: z.string().min(2, {
      message: "Password field must not be empty.",
    }),
  
  })