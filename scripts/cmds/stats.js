const { getStreamFromURL } = require("fb-watchman");

module.exports = {
  config: {
    name: "stats",
    aliases: ["ping","upt","time"],
    version: "1.0",
    author: "OtinXSandip",
    role: 0,
    shortDescription: {
      en: "stats",
    },
    longDescription: {
      en: "shows stats of bot.",
    },
    category: "system",
    guide: {
      en: "Use {p}stats to see stats of bot.",
    },
  },

  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const uptime = process.uptime();

      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);

      const uptimeString = `${hours}Hrs ${minutes}min ${seconds}sec`;

      const currentDate = new Date();
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      const date = currentDate.toLocaleDateString("en-US", options);
      const time = currentDate.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kathmandu",
        hour12: true,
      });

      const timeStart = Date.now();
      await api.sendMessage({
        body: "☢️☢️☢️(⁠☞ﾟ⁠∀ﾟ⁠)⁠☞°°°°°°° {𝙇𝙊𝘼𝘿} ",
      }, event.threadID);

      const ping = Date.now() - timeStart;

      let pingStatus = "Not smooth throw your router, buddy";
      if (ping < 400) {
        pingStatus = "Smooth like your tiny pussy";
      }

      // Assuming global.utils.getStreamFromURL(img) is correctly defined
      const imgURL= "https://i.ibb.co/pRDPcHv/image.jpg";
      const attachment = await global.utils.getStreamFromURL(imgURL);

      api.sendMessage({
        body: `𝙎𝘼𝙆𝙐𝙍𝘼 🎀\n...........................\n〉﹝🎖 𝙍𝙐𝙉𝙄𝙉𝙂 𝙏𝙄𝙈𝙀﹞\n ➤${uptimeString}\n──────────── \n﹝ 𝗗𝗔𝗧𝗘﹞: ${date}\n:::::::::::::::;;;;;;;;::\n 𝗧𝗜𝗠𝗘: ${time}\n;;;;;;;;;;;;;;;;;;;:: \n﹝ 𝙏𝙊𝙏𝘼𝙇 𝗨𝗦𝗘𝗥𝗦﹞\n➤ ${allUsers.length}\n..,............... \n﹝𝙏𝙊𝙏𝘼𝙇 𝗧𝗥𝗛𝗘𝗔𝗥𝗗𝗦﹞\n➤${allThreads.length}\n\n 𝗣𝗜𝗡𝗚﹞: ${ping}ms\n,(๑‵●‿●‵๑)..,.. \nPing status: ${pingStatus}`,
        attachment: attachment,
      }, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
}
