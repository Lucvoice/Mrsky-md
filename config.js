//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "https://od.lk/d/NzhfNTk5OTc4MjVf/Mrsky.mp3";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ptechtanzania015@gmail.com";
global.location = "Iringa,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://KING-MDBOT:KING-MDBOT@cluster0.ltjjfkx.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Mrsky02/Mrsky-md";
global.gurl = process.env.GURL || "https://chat.whatsapp.com/I98ptwPbiFd7CvHXtcJMxp";
global.website = process.env.GURL || "https://chat.whatsapp.com/I98ptwPbiFd7CvHXtcJMxp";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/504b26be1bb9cf690261b.jpg";
global.devs = "255715654328";
global.sudo = process.env.SUDO || "255715654328";
global.owner = process.env.OWNER_NUMBER || "255715654328";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUNweUVSMmhiQS91VE9hY2x5Z2hJTGhvOURNS0VsVlZIM2pYSXRBYXVGbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmRGZDVZaGJGbHJMbStyNlYxRTVLZlIyNnhxVjU5dG0rQ2JYUnp3T3VTST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwQmdFOGkvczgyRTlENzRueUFOUnZwMUNNZjN6bm1Od0JXS1hTVHJuZDJnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJac3EvOWtsaEIxaXB0RG93MFZrczZ3bGt1QnN6TUdMQWt1blE2QnBtZ1cwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNQRUJkUmFrbnJjYVZiZTM0TzQvdkhUdko1Z3RoWHNqdlNqamZCcFdwVTg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5iaWFSTEYxZlYxM1dRR1l2WUcvanFZOXJkcjU5WFhrUlp5NzJ4U29vaDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUtLaks1bS80cVBiMFpiYUIzTEhKRER1RVg0aWlrZUZVbkJDSkR0ZXZWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1g5eXFldUh5bHRESjlraHBVU0hJSEJXdW5PU0RZUlVEQTJEOWphMGFCMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imk5c1dSaEVvaFF4WU0yRnpvMlF3c09MSWtYVXZjQi9qYllEZUdBSDdTMStyNEYycExoNU5oOHBsWmFtMlhGb1A2N2hrSklRUVdCcGk3RSs3b0lnL2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiJXcXdWWnZ5YlpzR0V4SzZML3VKSDlMTlgxUnR5WmhTYWErZ2dzWWF4ZmcwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlOHZ0XzY4SlNyYVhNbVROWlNPR21nIiwicGhvbmVJZCI6ImU5ZmYwYTM1LWQ0MTYtNGNjNi1hZTdhLWU4MzQ3OGUzNGFjZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFT0JWVUhTanF1MDdTanJZRE5kcWgvUVBya1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3VldDJUWGpzWW5GakxiOEhWWjJ0Tk93V2NvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktHQ001UFpNIiwibWUiOnsiaWQiOiIyNTU2Nzc3ODA4MDE6MzRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01LVzRmRUNFTTdNeExRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkxBd3RsUkVRWnVGVFBCT0o4eFBnQ0dUbS9JdHcweDVSSVNYa3BHanpKV3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkpPR2hJSWxrbm9nT3FUU3RRUUlFbFM3UkJyZGtvVFliWm9vMnZ5a0VWWVgxM21US2F0VWU2T1BmLy9jQzN0Z2IyU0R4K2dCMGNVVm1QMk0yTm9TekRBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJFSzcvV2E4dXFvQ0xodzAyNXZkazFvZ0FPdGIxNTEvc0xLbHZpb3RsWUxiUHR1VHZxQ1pkV3grR1ZWSlBxOVIzVU1xbVovYmkvQ1h2ZHpTUHlUZ3RnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTY3Nzc4MDgwMTozNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTd01MWlVSRUdiaFV6d1RpZk1UNEFoazV2eUxjTk1lVVNFbDVLUm84eVZzIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwNzg4NTcxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdJVyJ9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "m",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || " _Mrsky-Md-Whatsapp-Bot_ ",
  author: process.env.PACK_AUTHER || "MRSKY",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "MRSKY-𝐌𝐃",
  ownername: process.env.OWNER_NAME || "MRSKY",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "http://,www.goog.com,https://,https://chat.whatsapp.com/,wa.me/,https://cutt.ly/,",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "MRSKY").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
