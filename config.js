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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_06_12_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAxLFxuICAgICAgICA3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDM0LFxuICAgICAgICA5NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICA0NyxcbiAgICAgICAgNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDYyLFxuICAgICAgICA1NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDI0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDY3LFxuICAgICAgICA5OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDcxLFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDcsXG4gICAgICAgIDMsXG4gICAgICAgIDg5LFxuICAgICAgICAxOSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA3LFxuICAgICAgICA3NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTEwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDExLFxuICAgICAgICA3MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMSxcbiAgICAgICAgODIsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA0OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgODksXG4gICAgICAgIDE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMixcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA5NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQ5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJEeG9OUGttMUY4Qzc4Si9ScC9CU2lybkpWb29ySFVaSzNVaHFUYzBhSDlrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjQwNzcwODExOTI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0MjYzMUEzRTU5RTA1OUFGNjVCNThGNEFCRUI3RjI1MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM3NzgzNzZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib2lzMEJwUUVRVWUwRUs4QnhKckNhQVwiLFxuICBcInBob25lSWRcIjogXCJjMmQ0MGZiMy01YmQ5LTQ1YzktODNkYi0wMmJmZThkZGRjYWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICAxMjAsXG4gICAgICAyMTYsXG4gICAgICAxNTEsXG4gICAgICAyNixcbiAgICAgIDUwLFxuICAgICAgMjMwLFxuICAgICAgMTU4LFxuICAgICAgMjA2LFxuICAgICAgMTExLFxuICAgICAgMTk3LFxuICAgICAgNDgsXG4gICAgICA1NSxcbiAgICAgIDE3OCxcbiAgICAgIDc0LFxuICAgICAgMTg4LFxuICAgICAgMjUsXG4gICAgICAxOTksXG4gICAgICA0NCxcbiAgICAgIDQxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk2LFxuICAgICAgNDcsXG4gICAgICAxMzksXG4gICAgICAxMixcbiAgICAgIDExMixcbiAgICAgIDM1LFxuICAgICAgMjU0LFxuICAgICAgOTQsXG4gICAgICA0NSxcbiAgICAgIDY0LFxuICAgICAgNSxcbiAgICAgIDEzNSxcbiAgICAgIDc5LFxuICAgICAgMTQ0LFxuICAgICAgMTk1LFxuICAgICAgMjAsXG4gICAgICAyMDMsXG4gICAgICAxNDgsXG4gICAgICAyNDgsXG4gICAgICA2OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJEMzNGQTNRQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNDA3NzA4MTE5Mjk6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImFub25pbVwiLFxuICAgIFwibGlkXCI6IFwiMjA3NDMwMjYwNjMzNzI5OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlg5ejVVRkVNSzMzYm9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZblp2bkdNN3M0YWV6NGJ5Nnd2alUxcVhITEZxbEVEcjMySlM5Q3ZIc2tvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlIwUFlIQ3M3NzNSNXh2WHRNTnR5ZXc5UFpMRjhHeHVGSFFiUVIwTG5PSDZQSC9UVDJIenVNcnRJQXA2cThWNXhwZzRsVzR5Q1FMVGwxeU8rbVRiVERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlJ1S0JwSmUyalhLUytxaVdKT2lHenlrWjZTbEJXMjVmSjJMTXZrRHoySzkyZlFJbkxCQm9JOE44bE5Jc1oxUDc3aUN0Y0RhNXBIOWFwZkFMeG51ckNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjQwNzcwODExOTI5OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM3NzgzNzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEZEhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQURkSC5qc29uIjogIntcImtleURhdGFcIjpcIjFkUnc5T05VV0V0SEdnVi9OMXk4QXR2c0k1S1lGN1k3WUIxTlUwK3JCTlk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM4NzUyNzg4OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMzc0MTk4MDA5MlwifSIKfQ=="  // PUT your SESSION_ID 


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
