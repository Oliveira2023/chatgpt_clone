// require("dotenv").config();
const { Configuration, OpenAiApi } = require("openai");
const { response } = require("../app");


console.log('key',process.env.OPEN_AI_KEY);

module.exports = class openai{
    
    static configuration() {
        return new OpenAiApi({
            apikey: process.env.OPEN_AI_KEY,
        });
    }
    static textCompletion() {
        return {
            temperature: 0.5,
            max_tokens: 2560,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
            stop: ["\n", "Human:", "AI:"],
            response_format: {
                type : "text",
            },
        }
    }
}
