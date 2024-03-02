const fs = require('fs');

module.exports = {
  config: {
    name: "file",
    version: "1.0",
    author: "OtinXShiva",
    countDown: 5,
    role: 0,
    shortDescription: "Send bot script",
    longDescription: "Send bot specified file ",
    category: "owner",
    guide: "{pn} file name. Ex: .{pn} filename"
  },

  onStart: async function ({ message, args, api, event }) {
    const permission = ["100065176744106"];
    if (!permission.includes(event.senderID)) {
      return api.sendMessage("𝙩'𝙚𝙨 𝙥𝙖𝙨 𝙢𝙤𝙣 𝙢𝙖î𝙩𝙧𝙚 😑 𝙙é𝙨𝙤 𝙖𝙨𝙠𝙞𝙥 𝙘'𝙚𝙨𝙩 𝙢𝙤𝙣 𝙢𝙖î𝙩𝙧𝙚 𝙦𝙪𝙞 𝙥𝙚𝙪𝙭 𝙪𝙩𝙞𝙡𝙞𝙨𝙚𝙧 𝙡𝙖 𝙘𝙚𝙩𝙩𝙚 𝙘𝙢𝙙 🙄", event.threadID, event.messageID);
    }
    
    const fileName = args[0];
    if (!fileName) {
      return api.sendMessage("𝙗𝙖𝙡𝙖𝙣𝙘𝙚 𝙡𝙚 𝙣𝙤𝙢 𝙙𝙪 𝙛𝙞𝙘𝙝𝙞𝙚𝙧 𝙢𝙤𝙣 🍯𝘽𝙗 𝙥𝙝𝙖𝙧𝙤𝙪𝙠🍯 ?? ಠωಠ.", event.threadID, event.messageID);
    }

    const filePath = __dirname + `/${fileName}.js`;
    if (!fs.existsSync(filePath)) {
      return api.sendMessage(`𝙣𝙖 𝘽𝙗 𝙘𝙚𝙩 𝙛𝙞𝙘𝙝𝙞𝙚𝙧 𝙣'𝙚𝙭𝙞𝙨𝙩𝙚 𝙥𝙖𝙨  [🦖]: ${fileName}.js`, event.threadID, event.messageID);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    api.sendMessage({ body: fileContent }, event.threadID);
  }
}
