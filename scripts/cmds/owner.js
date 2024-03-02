module.exports = {
  config: {
    name: "owner",
    aliases: [],
    version: "1.0",
    author: "Elohime Hatake",
    cooldown: 5,
    role: 0,
    shortDescription: {
      en: "Owner Command - Only bot admins can use it",
      tl: "Command ng Owner - Maaari lamang gamitin ng bot admins"
    },
    longDescription: {
      en: "Owner Command - Only bot admins can use it",
      tl: "Command ng Owner - Maaari lamang gamitin ng bot admins"
    },
    category: "goatBot",
    guide: {
      en: "{p}owner",
      tl: "{p}owner"
    }
  },

  onStart: async function ({ event, message, threadsData, usersData, api, commandName, role }) {
    // Get the owner's ID from the config file or wherever it's stored
    const ownerId = "100065176744106";

    // Check if the sender is the owner
    if (event.senderID === ownerId) {
      message.reply("👑|💆 𝙋𝙧𝙤𝙨𝙩𝙚𝙧𝙣𝙚𝙧 𝙫𝙤𝙪𝙨 𝙙𝙚𝙫𝙖𝙣𝙩 𝙢𝙤𝙣 𝙗𝙤𝙨𝙨 🍫𝙋𝙃𝘼𝙍𝙊𝙐𝙆🍫 𝙨𝙞 𝙣𝙤𝙣 𝙟𝙚 𝙫𝙤𝙪𝙨 𝙗𝙖𝙣 𝙩𝙤𝙪𝙨 ");
    } else {
      message.reply("🏌️| 𝙡𝙚𝙨 𝙥𝙖𝙪𝙫𝙧𝙚𝙨 𝙘𝙤𝙢𝙢𝙚 𝙩𝙤𝙞 𝙣𝙚 𝙢𝙚 𝙘𝙤𝙣𝙩𝙧𝙤𝙡𝙚 𝙥𝙖𝙨 𝙢𝙙𝙧 𝙚𝙨𝙥è𝙘𝙚 𝙙𝙚 𝙙𝙚𝙘𝙝𝙚𝙩");
    }
  },

  // Other functions like onChat, onReply, and their respective logics go here
};
