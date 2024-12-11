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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_33_12_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ5LFxuICAgICAgICA1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTksXG4gICAgICAgIDg1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDYzLFxuICAgICAgICA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDExNixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMixcbiAgICAgICAgODksXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTEwLFxuICAgICAgICA2MCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MyxcbiAgICAgICAgOTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDcwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNjksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMDksXG4gICAgICAgIDc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICA1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDg0LFxuICAgICAgICA2NixcbiAgICAgICAgMjMzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTcwLFxuICAgICAgICA4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3LFxuICAgICAgICAzMyxcbiAgICAgICAgODksXG4gICAgICAgIDE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDcwLFxuICAgICAgICAzLFxuICAgICAgICA5NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgODgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVlJ3YWdva2NVQUFBSS9aOFd6NTNpeWMyV1ZJV0ExUkFEZmhFamR4enFLST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQjBsWkdQTXpSb210QTZKLWlrV2c0UVwiLFxuICBcInBob25lSWRcIjogXCIzNzAxOTNlNi1kOWVlLTRiYzYtOGY2Ni1jYmQ5MTE2ZjIyNTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcwLFxuICAgICAgMTAsXG4gICAgICAzNixcbiAgICAgIDE1MyxcbiAgICAgIDg2LFxuICAgICAgOTIsXG4gICAgICAyMDEsXG4gICAgICA1MyxcbiAgICAgIDI1MSxcbiAgICAgIDE0OSxcbiAgICAgIDEzMCxcbiAgICAgIDI0MyxcbiAgICAgIDk1LFxuICAgICAgMTc3LFxuICAgICAgMTM0LFxuICAgICAgMTM0LFxuICAgICAgNzYsXG4gICAgICA1MixcbiAgICAgIDc1LFxuICAgICAgODdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ3LFxuICAgICAgMTg0LFxuICAgICAgMjE2LFxuICAgICAgMTAxLFxuICAgICAgMjIwLFxuICAgICAgMTEyLFxuICAgICAgMjQwLFxuICAgICAgMTM0LFxuICAgICAgOTYsXG4gICAgICAxMTUsXG4gICAgICAxNzcsXG4gICAgICAxNzgsXG4gICAgICAxMCxcbiAgICAgIDE3NyxcbiAgICAgIDIzMixcbiAgICAgIDYzLFxuICAgICAgOTMsXG4gICAgICAxNTUsXG4gICAgICAyMjgsXG4gICAgICAxNDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNONzl6NVVGRVBtTTVyb0dHQVFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlluWnZuR003czRhZXo0Ynk2d3ZqVTFxWEhMRnFsRURyMzJKUzlDdkhza289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiaGpnYVh0UHp0ckdFQ3dHYkJlV2lZMmc2QVJOc0F2eWExWGNUVWRmSnpZM0JqaGFnUjdNc1hndHdHQmdHMlVWUk5tOXZvbXA1N3NzeERwbGZLMG1GQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY2VJczRKck5NMFh3cU1ueG84Tlp3aldFTURqK1AxRi9uMEhKRmVMZnJxUDdqa002TnVQS3VpSW5HTVRIbEFQOUh6enhoQVh5S3FkNlFaTXJXMlZlQXc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI0MDc3MDgxMTkyOToxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImFub25pbVwiLFxuICAgIFwibGlkXCI6IFwiMjA3NDMwMjYwNjMzNzI5OjE3QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiNDA3NzA4MTE5Mjk6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM5MjAzODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMOXBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw5by5qc29uIjogIntcImtleURhdGFcIjpcIjVtNDNHOTI3RDUvcHVvSkZ5c29CLzJVK0tNZHZqQllkZFpDdmcxTHZOV1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM4NzUyNzg5OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDlwLmpzb24iOiAie1wia2V5RGF0YVwiOlwiL2pmOFRnNEN4eTljQmdjRWFoS2tuNHU3YXlJL0ZKcHc4WTN5RGdaSGhtZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzg3NTI3ODk5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMzODYyMzc1MzUxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDlxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMHdNMnJtditJZXZlOEQyWEl2dVR3NitTWGVYUHhVRGRpeWpUZ200Nmd4bz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzg3NTI3OTAwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMOXIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJINWtBYWtoditvZDNIMm9tQzlSTDBOSEJxaDdGYisrSDJoczR4c21tQnBzPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzODc1Mjc5MDAsXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw5cy5qc29uIjogIntcImtleURhdGFcIjpcInQrOXl5S2JCU3RWOGtIY3hodkt4YlN4L2ZOaVArRVlrQVNkaGQySVFQa1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM4NzUyNzkwMCxcImN1cnJlbnRJbmRleFwiOjMsXCJkZXZpY2VJbmRleGVzXCI6WzAsM119LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDl0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZnNiYVlMbytFS3dNQ0FFcUdFRU5SZStyV3ZERTJidWQ2T1dVVUpXd01zQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzg3NTI3OTAwLFwiY3VycmVudEluZGV4XCI6MyxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMzOTE1Nzk1MjgzXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDl1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwicnV6Z1lmeGF6MUhVRGx4L2dVcEtKQVliSkpyY3ZqanZWWWVmVXVjSnNXYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzg3NTI3OTAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM5MTU5MDA4MTJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFMOXYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJId1Z0ZFZyTHFUZGVPZ0x2OCtLM0NNdi9mUFdGSHNlWFRnVWZaZTRoMWZJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzODc1Mjc5MDEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw5dy5qc29uIjogIntcImtleURhdGFcIjpcInlrS3lrSERQUmhvcHp2L3loWWlHVmdYVlMvdk1uZ2Fyc3pjRzgwNnVvQ009XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM4NzUyNzkwMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMzkxNjY4NjU0M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUw5eC5qc29uIjogIntcImtleURhdGFcIjpcInlwZFJ1TElLMkFqMFAzMFhZNFJHKzZPQ2NHalBZM3lqYXVneVlsZk4xbXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTM4NzUyNzkwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzOTE2ODIzNjU3XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTDl5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwicElVWk83RUR0aVdYbDM5ODM3QS9QdDdoY043RUFFTkx5THhSaFZOZkREMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzg3NTI3OTAyLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM5MjAzNTMxODFcIn0iCn0="  // PUT your SESSION_ID 


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
