import { Configuration, OpenAIApi } from "openai";

export async function suggestDebugging(error: string, apiKey: string): Promise<string> {
  const openai = new OpenAIApi(new Configuration({ apiKey }));
  const prompt = `You are an expert software assistant. Debug this error: ${error}`;
  const resp = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }]
  });
  return resp.data.choices?.[0]?.message?.content ?? "No suggestion available.";
}