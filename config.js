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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_30_12_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NyxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgNDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDk1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQxLFxuICAgICAgICAxMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA4LFxuICAgICAgICAxNixcbiAgICAgICAgMTIyLFxuICAgICAgICAyLFxuICAgICAgICA0NixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ0LFxuICAgICAgICAyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDY3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1LFxuICAgICAgICAxMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjExLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDk2LFxuICAgICAgICA5MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDczLFxuICAgICAgICAxNTksXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDU3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTE1LFxuICAgICAgICA2MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMixcbiAgICAgICAgMTA5LFxuICAgICAgICA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxODUsXG4gICAgICAgIDYwLFxuICAgICAgICA1OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDM1LFxuICAgICAgICA1NixcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDk2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICA0OSxcbiAgICAgICAgODcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlk5S3BOSWdnTE1vTGZOMHZSdTU3aSs0aGp6cmNvUFlYZ0lkUi9ZZGxUQjQ9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiNDA3NzA4MTE5MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMwNkMxOTdDN0E4MUREOThCOTk0NDAyRTkyOEUwNDYxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTE1ODU5NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQwNzcwODExOTI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIxNjM1Q0VDRTMxMzIzRDYzMTQzMDg4MUMwQTFBMEQ5Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzUxNTg1OTZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRVBJTElkejRTbnVWMTItTUROaUczZ1wiLFxuICBcInBob25lSWRcIjogXCIyNzFlODBiMS04NGE5LTRiNTktYjY2NS03ZjUzODFkNWE1YjhcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkyLFxuICAgICAgMTQyLFxuICAgICAgMTE3LFxuICAgICAgMTY2LFxuICAgICAgMTQ1LFxuICAgICAgMjQ3LFxuICAgICAgMjEzLFxuICAgICAgMjQwLFxuICAgICAgMjAsXG4gICAgICA3OSxcbiAgICAgIDExLFxuICAgICAgMTg4LFxuICAgICAgNzQsXG4gICAgICAxMDQsXG4gICAgICAyMTIsXG4gICAgICAyNDQsXG4gICAgICA5OSxcbiAgICAgIDEyNyxcbiAgICAgIDEzMixcbiAgICAgIDEzOVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OSxcbiAgICAgIDYyLFxuICAgICAgMTQ0LFxuICAgICAgMjI2LFxuICAgICAgMTM1LFxuICAgICAgMTAxLFxuICAgICAgNTQsXG4gICAgICAxNzcsXG4gICAgICA0MSxcbiAgICAgIDM0LFxuICAgICAgMTE1LFxuICAgICAgNzUsXG4gICAgICAyMjgsXG4gICAgICA0LFxuICAgICAgMTU5LFxuICAgICAgNjIsXG4gICAgICAzNSxcbiAgICAgIDE2MSxcbiAgICAgIDg2LFxuICAgICAgMTUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjIyQkVHOVFKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0MDc3MDgxMTkyOTo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImFub25pbVwiLFxuICAgIFwibGlkXCI6IFwiMjA3NDMwMjYwNjMzNzI5OjU2QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1A3OXo1VUZFTHpXc2JzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWW5adm5HTTdzNGFlejRieTZ3dmpVMXFYSExGcWxFRHIzMkpTOUN2SHNrbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiMlpicnJudWJoRVdITDZ3TVhZRjlXNW9meVVZT2hTb1FWWU1pQ2psd2VZSE9KVlhUcVdDUWlRSERSRk54VEUxR0JWTS8rZWVycEJHbGl3ZnNVM0FDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsRFEvVTFGSUtOWjdtWFJ1ZGQ5ZC9pbERRc0s4UlpDajN5TjdKSG9iYlUwc2I2eWFxUVYzYUMyc2RxYk8xYlg1OHE1ZXROQ3pPdXZZMTgyVG5sWExBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI0MDc3MDgxMTkyOTo1NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTE1ODU5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJENFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkQ0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNUpSMnZFVjlXeGlIa0VZaEFXREIxQnpKVC9BbzI5WVZYQzRiT3dtTHlPZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzg3NTI3OTM0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzUxNTg1OTY0NjlcIn0iCn0="  // PUT your SESSION_ID 


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
