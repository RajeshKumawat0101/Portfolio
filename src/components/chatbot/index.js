import axios from "axios";
import prompt from "../../data/prompt.json";

const apiEndPoint = "https://api.x.ai/v1/chat/completions";
const systemPrompt = prompt.system;
const API_KEY =
  "xai-tcCH6Sp8s95s2vCinD1zMlBpmYo74bj9vv71Lb4wfGJsWABVZrDUAQDQOZYg6jSrObEfZzmI2tXQ8vBq";

const getRespfromBot = async (query) => {
    console.log(query);
    
    const response = await axios.post(
      apiEndPoint,
      {
        messages: [
          {
            role: "system",
            content: `${systemPrompt}`,
          },
          {
            role: "user",
            content: query,
          },
        ],
        model: "grok-beta",
        temperature: 0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`,
        },
      }
    );
    console.log("resp ", response, response.data);
    
    return response.data.choices[0].message.content;
};

export default getRespfromBot;