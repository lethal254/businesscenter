import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY
});
console.log(process.env.NEXT_PUBLIC_OPENAI_API_KEY);
const openai = new OpenAIApi(configuration);

export const runTextGeneration = async (prompt) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-002',
    prompt,
    temperature: 0.7,
    max_tokens: 2048,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });
  console.log(response.data);
  return response.data;
};

runTextGeneration();
