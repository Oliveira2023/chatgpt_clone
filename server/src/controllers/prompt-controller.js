const InputPrompt = require("../models/input-prompt");
const OpenAI = require("openai");

module.exports = {
    async sendText(req, res) {
        const openai = new OpenAI({
            apiKey: process.env.OPEN_AI_KEY,
        });
        const inputModel = new InputPrompt(req.body);
        const completion = async()=> await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "you are a helpfull senior software developer working with me as my pair programing help me learning with the code." },
                {
                    role: "user",
                    content: inputModel.prompt,
                },
            ]
        })
        completion().then(response => {
            try {
            let mensagem = response.choices[0].message;
            return res.status(200).json({ 
            sucess: true, 
            message: mensagem
            });
            } catch (error) {
            console.log("erro no catch controller");
            return res.status(500).json({ 
            sucess: false,
            message: "Internal server error",
            error: error.response? error.response.data : "there was an issue with the request, tem um problema aqui"
            });
            }
        });
    }
}