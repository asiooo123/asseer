'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState, useTransition } from "react";
import { submitContactForm } from '@/actions/contact'; // We'll create this action next

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères." }).max(50),
  email: z.string().email({ message: "Veuillez entrer une adresse e-mail valide." }),
  subject: z.string().min(5, { message: "L'objet doit contenir au moins 5 caractères." }).max(100),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères." }).max(1000),
});

type ContactFormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  initialSubject?: string;
}

export function ContactForm({ initialSubject }: ContactFormProps) {
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const [showCaptcha, setShowCaptcha] = useState(false); // Basic anti-spam, can be improved

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: initialSubject || "",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    if (!showCaptcha) { // Simple check, replace with real CAPTCHA
        toast({
            title: "Anti-Spam",
            description: "Veuillez cocher la case 'Je ne suis pas un robot'.",
            variant: "destructive",
        });
        return;
    }

    startTransition(async () => {
      try {
        const result = await submitContactForm(values);
        if (result.success) {
          toast({
            title: "Message Envoyé !",
            description: "Merci de nous avoir contactés. Nous reviendrons vers vous bientôt.",
          });
          form.reset();
          setShowCaptcha(false); 
        } else {
          toast({
            title: "Erreur",
            description: result.error || "Une erreur est survenue. Veuillez réessayer.",
            variant: "destructive",
          });
        }
      } catch (error) {
        toast({
          title: "Erreur Inattendue",
          description: "Une erreur inattendue est survenue. Veuillez réessayer plus tard.",
          variant: "destructive",
        });
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom et Prénom</FormLabel>
              <FormControl>
                <Input placeholder="Votre nom complet" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input type="email" placeholder="votreadresse@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Objet</FormLabel>
              <FormControl>
                <Input placeholder="Objet de votre message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Écrivez votre message ici..." {...field} rows={5} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
          <FormControl>
             <input type="checkbox" checked={showCaptcha} onChange={(e) => setShowCaptcha(e.target.checked)} className="form-checkbox h-5 w-5 text-primary focus:ring-accent border-gray-300 rounded" />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>
              Je ne suis pas un robot (CAPTCHA simplifié)
            </FormLabel>
            <FormDescription>
              Cochez cette case pour prouver que vous êtes humain.
            </FormDescription>
          </div>
        </FormItem>
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isPending}>
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Envoyer le Message
        </Button>
      </form>
    </Form>
  );
}
