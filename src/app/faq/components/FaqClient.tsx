'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Send } from 'lucide-react';
import { aiFAQ, AiFAQInput, AiFAQOutput } from '@/ai/flows/ai-faq'; // Ensure this path is correct

const faqFormSchema = z.object({
  query: z.string().min(5, { message: "Votre question doit contenir au moins 5 caractères." }),
});

type FaqFormValues = z.infer<typeof faqFormSchema>;

export function FaqClient() {
  const [answer, setAnswer] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FaqFormValues>({
    resolver: zodResolver(faqFormSchema),
    defaultValues: {
      query: "",
    },
  });

  async function onSubmit(values: FaqFormValues) {
    setIsLoading(true);
    setAnswer(null);
    setError(null);
    try {
      const input: AiFAQInput = { query: values.query };
      const result: AiFAQOutput = await aiFAQ(input); // Call the server action
      setAnswer(result.answer);
    } catch (e) {
      console.error("FAQ Error:", e);
      setError("Désolé, une erreur est survenue lors de la recherche de votre réponse. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Card className="shadow-lg w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-primary">Posez votre question à notre assistant IA</CardTitle>
        <CardDescription>Obtenez des réponses instantanées sur nos cours, ateliers, ou le concept TerreForm.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="query"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Votre question</FormLabel>
                  <FormControl>
                    <div className="flex space-x-2">
                       <Input placeholder="Ex: Quels sont les niveaux des formations ?" {...field} />
                       <Button type="submit" disabled={isLoading} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        {isLoading ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                          <Send className="h-5 w-5" />
                        )}
                        <span className="sr-only">Envoyer</span>
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>

        {isLoading && (
          <div className="mt-6 flex items-center justify-center text-muted-foreground">
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Recherche de la réponse...
          </div>
        )}

        {error && (
          <Card className="mt-6 border-destructive bg-destructive/10">
            <CardContent className="p-4">
              <p className="text-destructive text-sm font-medium">{error}</p>
            </CardContent>
          </Card>
        )}

        {answer && !isLoading && (
          <Card className="mt-6 bg-primary/5">
            <CardHeader>
              <CardTitle className="text-lg text-primary">Réponse de l'assistant IA :</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground whitespace-pre-line">{answer}</p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}
