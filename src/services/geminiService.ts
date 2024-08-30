const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs")

if (!process.env.GEMINI_API_KEY) {
  throw new Error("The GEMINI_API_KEY was not defined in the environment.");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const extractMeasurementFromImage = async () => {
  try {
    const prompt = "Gemini, você consegue ler este hidrômetro e me retornar as medidas? Somente o número da medição";
    const image = {
      inlineData: {
        data: Buffer.from(fs.readFileSync("src/assets/hidrometro.jpg")).toString("base64"),
        mimeType: "image/jpeg",
      },
    };

    const result = await model.generateContent([prompt, image]);

    if (result && result.response) {
      console.log(result.response.text());
    } else {
      console.error("No valid response was received from the model.");
    }
  } catch (error) {
    console.error("Error trying to extract measurement from image:", error);
  }
};
