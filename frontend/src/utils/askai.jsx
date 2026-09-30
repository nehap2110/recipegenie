import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";



const askai = async (question) => {

  const llm = new ChatOpenAI({
    openAIApiKey: import.meta.env.VITE_OPENAI_KEY,
    temperature: 0.7
  });

  const prompt = ChatPromptTemplate.fromMessages([
    ["system", `You are a helpful recipe assistant.
When a user asks for a recipe, provide:
- Ingredients with quantities
- Step-by-step cooking instructions
- Preparation and cooking time
- Servings
- A few useful tips or substitutions

Keep the recipe clear, concise, and beginner friendly.
Adapt the recipe to the user's dietary preferences or available ingredients when mentioned.`],

    ["human", "{ask_recipe}"]
  ]);

  const formatprompt = await prompt.formatMessages({
    ask_recipe: question
  });

  return llm.invoke(formatprompt);
};

export default askai;