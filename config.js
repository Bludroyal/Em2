//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2347053192517,2347086220601";
global.owner = process.env.OWNER_NUMBER || "2349164718113";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0wzLzExTnVCQjBjWnQyQmw5L2hiVEZtWEtkNlBYQlZid1dIUW9GRmxVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0JzTE44Y2h6dktqWnhkMU5lNHY0OEtZcjQ2QjAxaitXWERWVnBsbGtuTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5UFpmRVdJd25KbDRFMU9xcFM3Q0pCL1VvK2x1R0V3NElxSWYxTG5oblhrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2RmdzamVmaGhrMUp6cFdsNnNlTmYrS0Y1T0d3bk53ZVJKZ2t4N0RBZ0ZFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZQSzVxUnpxRXBCUVB4akM0SlpSemNDYkRwMDRYd0JlMnFuWWhtakhVWGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdzTUMrV1NhZC9UNDE2WCtEZHMvamVnb1BLMWtxblM0TWhlc0FIeDZVaXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ082bG1jcUs1TXZPYllSSnFFUlNmcGhOWElTSElzN05RcFZsRlpmTC9FRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMGNUSm1UNlFEZmRpVjJKTkhsTDJZVDhPT2Q0QnVOeFRSZ1FMQ0FUMktDMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBoSHQxUVBBdUo2U0M2aGx6Yk14M0VWVVdJcjRRYm5nOXBDVnIxK0Z2Z3orZXlQM3pETUFMb3NkTVNHcWU1RitwSUpBNTdITWZqVFFtSE9JcmxYempRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc1LCJhZHZTZWNyZXRLZXkiOiJaUHM3LzRHdnlhVXFzTno0M3FWY2ZOMFNnWHo4ODBYUjRDejJWb2lDZ240PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJpb183aThTZFRQT20xN3VYSFVRWVRnIiwicGhvbmVJZCI6ImU1OTIzMTMxLTk2NTktNGJhYi04OWJhLTk4ODIwYThmMWEwZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiUFBDSU84aXdMVG8xZ3pGb1FSVHQ1OFk3TkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickFYQ3RoUmVEbGNlL29VUC95NU9VTWRDUW5ZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNWMVdEUlZUIiwibWUiOnsiaWQiOiIyMzQ5MTY0NzE4MTEzOjU2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6InNoaSAgICAgTmUifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lyUXo3SUlFUENhdkx3R0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjhrUUV1V2pOSDcwWXhyWjBxSVhISXJDZlU5VVVMSlhDU1cvSVlzS3paQTQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjdSZlplT2RRNHJYdnZjMDI5TmZwaDM3Z2JlSE5OdjdhODZWT0ZRQUxRVEcyYW1COXczOVNtVlBTbnBlc3VPazY5bWloQVUzeW9nWUJYMFJNTVRaWURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDV1FiMXdGMkYwTjBRdEJ2clF4WVlVSlVGR0NNYjdrd0JJcFdzd0NJV1p1aXV1cjdJYTFSTDNabWZrVjVtWHBseGZHamRhajN0RGRkaTBzQ28vWFFpZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNjQ3MTgxMTM6NTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZkpFQkxsb3pSKzlHTWEyZEtpRnh5S3duMVBWRkN5VndrbHZ5R0xDczJRTyJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNzQyODM0OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFEU1YifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "☯︎shi ne✌︎💨",
  author: process.env.PACK_AUTHER || "☯︎shi ne✌︎💨",
  packname: process.env.PACK_NAME || "☯︎shi ne✌︎💨",
  botname: process.env.BOT_NAME || "☯︎shi ne✌︎💨",
  ownername: process.env.OWNER_NAME || "☯︎shi ne✌︎💨",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "☯︎shi ne✌︎💨").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
