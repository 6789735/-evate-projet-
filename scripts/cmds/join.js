module.exports = {
  config: {
    name: "join",
    aliases: ['addme', 'joinme'],
    version: "1.0",
    author: "joel",
    countDown: 5,
    role: 2,
    shortDescription: {
      en: "Add user to support group",
    },
    longDescription: {
      en: "This command adds the user to the group where bot exist",
    },
    category: "owner",
    guide: {
      en: "To use this command, simply type !join <threadID>.",
    },
  },

  onStart: async function ({ api, args, message, event }) {
    const supportGroupId = args[0];
    if (!supportGroupId) {
      api.sendMessage("Please provide the support group ID.", event.threadID);
      return;
    }
    const threadID = event.threadID;
    const userID = event.senderID;
    const threadInfo = await api.getThreadInfo(supportGroupId);
    const participantIDs = threadInfo.participantIDs;
    if (participantIDs.includes(userID)) {
      api.sendMessage(
        "🥷 |𝙢𝙤𝙣 𝙜𝙣𝙤𝙪𝙜𝙣𝙤𝙪 𝙫𝙤𝙪𝙨 ê𝙩𝙧𝙚 𝙙𝙚𝙟𝙖 𝙖𝙟𝙤𝙪𝙩𝙚𝙧 🕵️.",
        threadID
      );
    } else {
      api.addUserToGroup(userID, supportGroupId, (err) => {
        if (err) {
          console.error("Failed to add user to support group:", err);
          api.sendMessage("😿| 𝘿𝙚𝙨𝙤𝙡𝙚𝙧 𝙢𝙤𝙣 𝘽𝙤𝙨𝙨 𝙟'𝙖𝙞 𝙥𝙖𝙨 𝙥𝙪 𝙫𝙤𝙪𝙨 𝙖𝙟𝙤𝙪𝙩𝙚𝙯 𝙙𝙖𝙣𝙨 𝙡𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 🥺.", threadID);
        } else {
          api.sendMessage(
            "💃| 𝙈𝙤𝙣 𝙧𝙤𝙞 𝙫𝙤𝙪𝙨 𝙚𝙩𝙧𝙚 𝙖𝙟𝙤𝙪𝙩𝙚𝙯 𝙙𝙖𝙣𝙨 𝙡𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙥𝙧𝙤𝙛𝙞𝙩𝙚𝙧 𝙖𝙪 𝙢𝙖𝙭 𝙟𝙚 𝙫𝙤𝙪𝙨 𝙖𝙞𝙢𝙚 💋.",
            threadID
          );
        }
      });
    }
  },
};
