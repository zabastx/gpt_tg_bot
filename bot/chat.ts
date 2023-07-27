import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
  apiKey: useRuntimeConfig().AI_KEY
})
const openai = new OpenAIApi(config)

export async function useChat(prompt: string) {
  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: 'assistant', content: prompt }],
      temperature: 0.5,
    });
    return completion.data.choices.map(item => item.message)

  } catch (err) {
    const error = err as Error
    console.log('error', error)
    return []
  }
}

export async function generateImage(prompt: string) {
  try {
    const img = await openai.createImage({
      prompt
    })
    return img.data.data

  } catch (err) {
    const error = err as Error
    console.log('error', error)
    return []
  }
}