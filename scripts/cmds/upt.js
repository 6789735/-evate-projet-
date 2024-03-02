module.exports = {
  config: {
    name: "uptime",
aliases: ["upt"],
    version: "1.0",
    author: "Pharouk",
    role: 2,
    shortDescription: {
      en: "Displays the total number of users of the bot and check uptime "
    },
    longDescription: {
      en: "Displays the total number of users who have interacted with the bot and check uptime."
    },
    category: "system",
    guide: {
      en: "Use {p}totalusers to display the total number of users of the bot and check uptime."
    }
  },
  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const uptime = process.uptime();
      
const days = 
Math.floor(uptime / (3600 * 24));
      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);
      
      const uptimeString = `${days}days ${hours}𝑯𝒓𝒔 ${minutes}𝑴𝒊𝒏 ${seconds}𝑺𝒆𝒄`;
      
      api.sendMessage(`═════𝗨𝗽𝘁𝗶𝗺𝗲/𝗨𝗽𝘁═════

☀️ | 𝙩𝙚𝙢𝙥𝙨 𝙚𝙭𝙚𝙘𝙪𝙩𝙚𝙧 𝙥𝙖𝙧 🍯ᏕᎯᏦᏬᏒᎯ🍯 \ ${uptimeString}\

≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
🦖 | 🌱𝙣𝙤𝙢𝙗𝙧𝙚 𝙩𝙤𝙩𝙖𝙡 𝙙'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙞𝙤𝙣 🌱 \ ${allUsers.length}\

≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡

🥃 | 𝙣𝙤𝙢𝙗𝙧𝙚 𝙩𝙤𝙩𝙖𝙡 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙩𝙞𝙤𝙣🥂 \ ${allThreads.length}`, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
};
