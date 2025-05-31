'use server';

import * as z from 'zod';

// Login Schema and Action
const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
type LoginFormValues = z.infer<typeof LoginFormSchema>;

export async function loginUser(values: LoginFormValues): Promise<{ success: boolean; error?: string; userId?: string }> {
  const validation = LoginFormSchema.safeParse(values);
  if (!validation.success) {
    return { success: false, error: "Données de connexion invalides." };
  }

  // Simulate user lookup and password check
  console.log("Login attempt:", validation.data.email);
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay

  // Placeholder logic:
  if (validation.data.email === "test@example.com" && validation.data.password === "password") {
    // TODO: Implement actual session management (e.g., set a cookie)
    return { success: true, userId: "user123" };
  } else {
    return { success: false, error: "Adresse e-mail ou mot de passe incorrect." };
  }
}


// Registration Schema and Action
const RegistrationFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  password: z.string().min(6),
  // confirmPassword is validated on client by refine, not needed here if passwords match
  role: z.enum(["participant", "administrateur"]),
});
type RegistrationFormValues = Omit<z.infer<typeof RegistrationFormSchema>, 'confirmPassword'>;


export async function registerUser(values: RegistrationFormValues): Promise<{ success: boolean; error?: string; userId?: string }> {
  const validation = RegistrationFormSchema.safeParse(values);
  if (!validation.success) {
    // This should ideally be caught by client-side validation, but good to have server-side too.
    const errors = validation.error.format();
    console.error("Registration validation error:", errors);
    return { success: false, error: "Données d'inscription invalides." };
  }

  // Simulate checking if user already exists and creating user
  console.log("Registration attempt for:", validation.data.email);
  await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

  // Placeholder logic:
  // Check if email already exists
  // if (validation.data.email === "existing@example.com") {
  //   return { success: false, error: "Cette adresse e-mail est déjà utilisée." };
  // }

  // TODO: Implement actual user creation in database and password hashing
  // const hashedPassword = await hashPassword(validation.data.password);
  // const newUser = await db.createUser({ ...validation.data, password: hashedPassword });

  console.log("User registered (simulated):", validation.data.name, validation.data.email, validation.data.role);
  return { success: true, userId: `newUser-${Date.now()}` };
}
