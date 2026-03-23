import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

// Debug: Log environment variables
console.log('Environment variables check:');
console.log('GEMINI_API_KEY exists:', !!process.env.GEMINI_API_KEY);
console.log('GOOGLE_API_KEY exists:', !!process.env.GOOGLE_API_KEY);
console.log('GOOGLE_GENAI_API_KEY exists:', !!process.env.GOOGLE_GENAI_API_KEY);

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || process.env.GOOGLE_GENAI_API_KEY;

if (!apiKey) {
  console.error('No API key found in environment variables!');
  throw new Error('Please set GEMINI_API_KEY, GOOGLE_API_KEY, or GOOGLE_GENAI_API_KEY in your .env file');
}

export const ai = genkit({
  plugins: [googleAI({
    apiKey: apiKey
  })],
  model: 'googleai/gemini-2.5-flash',
});
