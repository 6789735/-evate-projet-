const axios = require('axios');

const Prefixes = [
  '/ai',
  'kim',
  'nemoo',
  '+ai',
  'nemo',
  'ai',
  'ask',
];

module.exports = {
  config: {
    name: "ask",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply(" 💃𝙨𝙖𝙡𝙪𝙩 𝙟𝙚 𝙨𝙪𝙞𝙨 𝙩𝙤𝙣 𝙖𝙢𝙞𝙨 𝙘𝙤𝙢𝙢𝙚𝙣𝙩 𝙟𝙚 𝙥𝙚𝙪𝙭 𝙫𝙤𝙪𝙨 𝙖𝙥𝙥𝙤𝙧𝙩𝙚𝙧 𝙢𝙤𝙣 𝙖𝙞𝙙𝙚 
                            𝙨𝙞 𝙫𝙤𝙪𝙨 𝙖𝙫𝙚𝙯 𝙙𝙚𝙨 𝙥𝙧𝙚𝙤𝙘𝙘𝙪𝙥𝙖𝙩𝙞𝙤𝙣 𝙙𝙚𝙢𝙖𝙣𝙙𝙚𝙯 𝙟𝙚 𝙛𝙚𝙧𝙧𝙖𝙞 𝙙𝙚 𝙢𝙤𝙣 𝙢𝙞𝙚𝙪 𝙥𝙤𝙪𝙧 𝙫𝙤𝙪𝙨 𝙨𝙖𝙩𝙞𝙛𝙖𝙞𝙧𝙚💆");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply(answer);

    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
