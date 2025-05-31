// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview An AI-powered FAQ agent for the TerreForm website.
 *
 * - aiFAQ - A function that handles the AI-powered FAQ process.
 * - AiFAQInput - The input type for the aiFAQ function.
 * - AiFAQOutput - The return type for the aiFAQ function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiFAQInputSchema = z.object({
  query: z
    .string()
    .describe("The user's question about the courses, workshops, or the general concept of TerreForm."),
});
export type AiFAQInput = z.infer<typeof AiFAQInputSchema>;

const AiFAQOutputSchema = z.object({
  answer: z
    .string()
    .describe('The AI-generated response to the user query, providing informative and helpful information.'),
});
export type AiFAQOutput = z.infer<typeof AiFAQOutputSchema>;

export async function aiFAQ(input: AiFAQInput): Promise<AiFAQOutput> {
  return aiFAQFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aiFAQPrompt',
  input: {schema: AiFAQInputSchema},
  output: {schema: AiFAQOutputSchema},
  prompt: `You are an AI assistant providing information about TerreForm, a website dedicated to the art of working with clay.

You should answer questions about courses, workshops, the team, the concept, and any other information available on the website.

Respond to the following query with an informative and helpful answer:

{{query}}`,
});

const aiFAQFlow = ai.defineFlow(
  {
    name: 'aiFAQFlow',
    inputSchema: AiFAQInputSchema,
    outputSchema: AiFAQOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
