'use server';

/**
 * @fileOverview AI chat assistant for answering dental FAQs and guiding users to the right service.
 *
 * - dentalFAQChatbot - A function that handles the chatbot flow.
 * - DentalFAQChatbotInput - The input type for the dentalFAQChatbot function.
 * - DentalFAQChatbotOutput - The return type for the dentalFAQChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DentalFAQChatbotInputSchema = z.object({
  query: z.string().describe('The user query about dental services or oral health.'),
});
export type DentalFAQChatbotInput = z.infer<typeof DentalFAQChatbotInputSchema>;

const DentalFAQChatbotOutputSchema = z.object({
  answer: z.string().describe('The answer to the user query, providing helpful information and guidance.'),
});
export type DentalFAQChatbotOutput = z.infer<typeof DentalFAQChatbotOutputSchema>;

export async function dentalFAQChatbot(input: DentalFAQChatbotInput): Promise<DentalFAQChatbotOutput> {
  return dentalFAQChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dentalFAQChatbotPrompt',
  input: {schema: DentalFAQChatbotInputSchema},
  output: {schema: DentalFAQChatbotOutputSchema},
  prompt: `You are a helpful AI assistant providing information about dental services and oral health.

  A user has the following query:
  {{query}}

  Provide a concise and informative answer to the user's query. If the query relates to a specific service offered by D-Cure dental clinic, briefly describe the service and its benefits.  If possible, offer gentle guidance towards relevant services.
  Do not ask the user for additional information; answer the question directly based on the information provided.  Keep answers brief (under 100 words).`,
});

const dentalFAQChatbotFlow = ai.defineFlow(
  {
    name: 'dentalFAQChatbotFlow',
    inputSchema: DentalFAQChatbotInputSchema,
    outputSchema: DentalFAQChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
