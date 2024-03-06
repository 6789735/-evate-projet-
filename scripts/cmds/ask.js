const axios = require('axios');

const Prefixes = [
  '/ai',
  'kim',
  'Nemo',
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
        await message.reply("🍯 𝙋𝙃𝘼𝙍𝙊𝙐𝙆 🍯 🍫

ᎽᎾᏬᏒ ᏅᏬᎬᏕᎿᎨᎾᏁ🥺....?");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply({ body: `⚪ 𝙋𝙝𝙖𝙧𝙤𝙪𝙠 🔵
━━━━━━━━━━━━━        
${answer}
━━━━━━━━━━━━━ 🔵`,
});

   } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
