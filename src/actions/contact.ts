'use server';

import * as z from 'zod';

const ContactFormSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.string().min(5).max(100),
  message: z.string().min(10).max(1000),
});

type ContactFormValues = z.infer<typeof ContactFormSchema>;

export async function submitContactForm(values: ContactFormValues): Promise<{ success: boolean; error?: string }> {
  const validation = ContactFormSchema.safeParse(values);

  if (!validation.success) {
    return { success: false, error: "Données invalides." };
  }

  // Simulate sending an email or saving to a database
  console.log("Contact form submitted:", validation.data);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real application, you would handle potential errors during email sending/DB saving
  // For example:
  // const emailSent = await sendEmail(validation.data);
  // if (!emailSent) {
  //   return { success: false, error: "Erreur lors de l'envoi de l'e-mail." };
  // }

  // TODO: Implement actual email notification or database saving logic here.
  // For now, we'll always return success.
  
  return { success: true };
}
