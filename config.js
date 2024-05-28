const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_11_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDksXG4gICAgICAgIDkxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjExLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA3NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDYwLFxuICAgICAgICAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDg5LFxuICAgICAgICA2MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOCxcbiAgICAgICAgNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgODIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjEwLFxuICAgICAgICA2NSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMyxcbiAgICAgICAgNDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NixcbiAgICAgICAgNTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjksXG4gICAgICAgIDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTksXG4gICAgICAgIDMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM4LFxuICAgICAgICA5OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDMwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5MSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDExMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDksXG4gICAgICAgIDI2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIk45aWtxWDV6Y253a3A0aGxkSVpnS0JmdlYyNGxCNi9Hbkp0UW5Ob0hLcGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzkxNDA3MDQ1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3MDIzNkM3M0E5OEQ1OTJBMTkxQzZDREZBRkM0QzA2NlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY4ODc0NzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3OTE0MDcwNDVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkRFQTA1OTRENUZEQ0YzNEMwNkUyRTgzMUIzNTYxNzZGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNjg4NzQ3OFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyeElQSFN0MFNJcTlpaTNiZFlBRzF3XCIsXG4gIFwicGhvbmVJZFwiOiBcImZhY2VjZTI3LWU0NTItNDVmNC1iYzMyLTE1ZmYxZjk4ZGRjOVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NixcbiAgICAgIDE4MyxcbiAgICAgIDk2LFxuICAgICAgMjIxLFxuICAgICAgODYsXG4gICAgICAxMjMsXG4gICAgICAxMzYsXG4gICAgICAyMzYsXG4gICAgICAxODQsXG4gICAgICAxODIsXG4gICAgICA2NCxcbiAgICAgIDE3MCxcbiAgICAgIDE2OCxcbiAgICAgIDE5NixcbiAgICAgIDI0MyxcbiAgICAgIDcsXG4gICAgICAzMyxcbiAgICAgIDI0NSxcbiAgICAgIDEyMyxcbiAgICAgIDIyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjMsXG4gICAgICAxMDAsXG4gICAgICAxMTEsXG4gICAgICAxNDAsXG4gICAgICA5NyxcbiAgICAgIDM0LFxuICAgICAgNzYsXG4gICAgICAxMDAsXG4gICAgICAxMzQsXG4gICAgICAyNDIsXG4gICAgICAxNzcsXG4gICAgICAyNTAsXG4gICAgICA5MyxcbiAgICAgIDE0MCxcbiAgICAgIDEzMixcbiAgICAgIDIzOSxcbiAgICAgIDE4LFxuICAgICAgMjMxLFxuICAgICAgMjEyLFxuICAgICAgMTQ0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjcxUFNFWUVIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3OTE0MDcwNDU6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImVuZ2luZWVyXCIsXG4gICAgXCJsaWRcIjogXCIxODgzODE4OTYxNzU3MjA6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNS3I3b2NCRUsyLzFySUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk90UVl5dHBuSFdpOWxiTlRIa2I2M09iOUNYbFZSaE9LNEVPNGtMejlBUmc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS01rTEhlMWZZL0FOODJDM2J3d2d4OEtndWZTUXhjd3JJQ1FkUjZ1NE4rWnRWMEFjc0xNTE5QMmZkdTVhSUxFNWc0WkVRVFVQMC9lNUhkdmRDZmhuQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwidWZ3Z0pJUC85RHVUOUZ6Q2NOR2RXZmZMSm1Qa3hKSHRpak5HOC9ubHFxMWV1SlFrT3poY2o1SUZtOVM2KzE5eVoxaEFhcnlyNG9LaTVVQ09hZ3JvQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzkxNDA3MDQ1OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY4ODc0NzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFITUZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhNRi5qc29uIjogIntcImtleURhdGFcIjpcImM4bTlaS1hHQTRxOTdwS1NULzdtdjZDOHBGME5vRGpMYzB2eG9Oa2hOQjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjg0OTIzMzI5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE2MTIwOTgxMzkzXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "true",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
