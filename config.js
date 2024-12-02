const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0770811929";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_37_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAzMixcbiAgICAgICAgMjAwLFxuICAgICAgICA3MixcbiAgICAgICAgOTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDM4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODQsXG4gICAgICAgIDQyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODksXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA2NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIsXG4gICAgICAgIDEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDkyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIsXG4gICAgICAgIDY1LFxuICAgICAgICAxODMsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDMwLFxuICAgICAgICA5MCxcbiAgICAgICAgODEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIsXG4gICAgICAgIDU2LFxuICAgICAgICA5MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM5LFxuICAgICAgICA0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA3OCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjM1LFxuICAgICAgICA5NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDY1LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyOSxcbiAgICAgICAgODQsXG4gICAgICAgIDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMixcbiAgICAgICAgMTE0LFxuICAgICAgICA0LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDgzLFxuICAgICAgICA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjExLFxuICAgICAgICA1MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDksXG4gICAgICAgIDQ4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDQzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIxU2ViNDdjRTB0RVZaVlJWZll0Qnd2S3lDdk4yTmZiRjE2OXFlVlFaSnNJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQwNzcwODExOTI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENjExODc4Qzk3NzkyNjM1M0E4NEQwMDY4MjhERkY4RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzMxMzIyNzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI0MDc3MDgxMTkyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjNBQjJFMzdGMEFGMTY2RDk1RkM0MjFCMkY1Mzg0M0FcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzMTMyMjc2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInRhS29SbGU2UmxPV1RDei1LeTJscEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjc1MzUzN2EtMmY2Ni00MjNiLWI4MjYtOTdmMmYwYWY0MjgzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MyxcbiAgICAgIDQyLFxuICAgICAgNzQsXG4gICAgICA4NixcbiAgICAgIDE2OCxcbiAgICAgIDE3MyxcbiAgICAgIDE3OCxcbiAgICAgIDE5NixcbiAgICAgIDE1NSxcbiAgICAgIDIwNixcbiAgICAgIDIwNyxcbiAgICAgIDU5LFxuICAgICAgMTY4LFxuICAgICAgMTIxLFxuICAgICAgMjE4LFxuICAgICAgMTM1LFxuICAgICAgMjEzLFxuICAgICAgODQsXG4gICAgICAxMjgsXG4gICAgICAxMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODgsXG4gICAgICAyNTIsXG4gICAgICA1NixcbiAgICAgIDE0OSxcbiAgICAgIDUwLFxuICAgICAgNCxcbiAgICAgIDE1MSxcbiAgICAgIDE4MyxcbiAgICAgIDE1OCxcbiAgICAgIDQ1LFxuICAgICAgOCxcbiAgICAgIDEzNSxcbiAgICAgIDkyLFxuICAgICAgMTM5LFxuICAgICAgMTYwLFxuICAgICAgMTAsXG4gICAgICAxODQsXG4gICAgICAyMDksXG4gICAgICAxMTIsXG4gICAgICA5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMSlc2NzhRVlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDA3NzA4MTE5Mjk6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIwNzQzMDI2MDYzMzcyOTo3NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJBbm9uaW1cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNekcrYVFIRU96L3Rib0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInB5alpzU2VkaXVOWXhKNW93YzVvZ2pXbmxYZlZtaklScGxRZDNVeGg4d0k9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaVpIS1FkMEJrMjlCL1hrUWZJb2J0SWdrUVlmUW1yVE9tMHo5ZGxhNkYwRTJUekJDRlF4VS9UbGJoaVRNYWwrT1hkUDVsbmw5ZC9Uc3phRGZ4NTlxRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWDY2aUtXbGJNaU84ZThYdUMzdDgwWDJmZWwxcXFuOXJZQjg0ZG5WbkxIdHdJdzdMVWFmcUhZa0FPdFFoY3Q1ZnhBOTJGaFhzQnNiSEJtVm02L1ZzQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDA3NzA4MTE5Mjk6NzVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzMxMzIyNzAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKcGlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpwaS5qc29uIjogIntcImtleURhdGFcIjpcIk94VE5KT2FidVU0a2xKbVpKdkRTUTFweFJNVmYvN3hyaHB3QjkzNVhvYTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTk1NjUzNzE2MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "ANONIM",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
