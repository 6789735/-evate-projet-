 const axios = require('axios');

const Prefixes = [
 'orochi',
 'chi',
 'oumar',
 '/chi',
 'daemon',
];

module.exports = {
 config: {
 name: "orochi",
 aliases: [`chi`],
 version: 1.0,
 author: "Aryan Chauhan",
 longDescription: "AI",
 category: "CHATGPT",
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
 await message.reply("🏅𝘿𝘼𝙀𝙈𝙊𝙉-𝙊𝙀🏅:\n\𝙣(ಠ⌣ಠ).......? 𝙔𝙊𝙐𝙍 𝙌𝙐𝙀𝙎𝙏𝙄𝙊𝙉 𝙋𝙇𝙀𝘼𝙎𝙀 𝙈𝘼𝙎𝙏𝙀𝙍");
 return;
 }

 api.setMessageReaction("🔹", event.messageID, (err) => {}, true);

 const response = await axios.get(`https://aryanapis.replit.app/orochi?prompt=${encodeURIComponent(prompt)}`);
 const answer = response.data.answer;

 api.setMessageReaction("🍫", event.messageID, (err) => {}, true);

 await message.reply({ body: `🏅𝘿𝘼𝙀𝙈𝙊𝙉-𝙊𝙀🏅
________________________

${answer}
❣◕ ‿ ◕❣ 🥉ᏢᎻᎯᏒᎾᏬᏦ🥉`,
}); api.setMessageReaction("🔸", event.messageID, (err) => {}, true);

 } catch (error) {
 console.error("Error:", error.message);
 }
 }
};
