const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA61Uy47iRhT9l9qCBtvYxkZqKcYPwDzazdMQZVG2y6bAL6oKjBkhZTfL/oReJbvsIkVZZT9/MX/Qn5CY7s60ksmkI8WrctXVveece+59D9IMUzRAJWi/BznBR8hQdWRljkAbdA5hiAiogwAyCNpA6dzuLIMcFnnNPXnq5thamW7I1sOFp5redDVr7YzxfkWK5fwGXOogP3gx9r+S0JNHvttbUnnKY8PYGzViQSkU7DtTkANHdJu3x8BtGJjuRjfgUmWEmOA0MvMNShCB8QCVDsTkbfAjx+O5U8tF3W4AqbDf2eekEzYIt/KUXsfTFMmYjXF2lwi7t8GfDze9obJVfdPtDzdyY+3tbzO8IoaOG8Gu7K3DwjgOsC+doif4FEcpCvoBShlm5Zt1R1YabWtJqt2eCqMIgx7vF/7yNkpria94+VESUXOz9O2zS98G/Ljgl2tlFq70UHKSyaG1hXcLUe6fdYG5sZciu9zX7rqOXPqvgTvkxSu7/6L7aDzd08nJDHawcLNuGKyho6aKxHuu5QVupMvjKDhr2ZCP3gY/6rNlYlN3QkRrYN+SOLAWZ0NbTZjWaGwCQe8PTmN/upwszM/wITuQr6FsGOUtPpMU8nBMraD0uVA9DfLF4m7lasJ072zigXXqqFrHmbqb7cIaOmYsDUVdLN3jnCvEPKGKV2bU2uw0+aQM9GNto91cGe1Q2Q9Am7/UAUERpoxAhrP0eqfUAQyOU+QTxK7qAss7j4fb8mAXThpMC1zU+L7QWY69WB2p/PQcDnh0FtOGw/VvQB3kJPMRpSjoYcoyUo4QpTBCFLS/vTaq4kxQkjFk4wC0gcSpYlPgBE5Uv6Hvig1kFOb5uxQxUAchyZIRAm1GDqgOrvGazgkSp5odk5d1XRJVTTA1Sey0ZM4QDEWqCCZPNWc4QZTBJAdtviXzksAJknqp/08wRMuQzJbO652mrquGICia1eRlq6mLIq99HYbMXb6rgxSd2JOJK+mbfB2EmFA2Tw95nMHgxeEvj9D3s0PKpmXq69UBEdB+dY0Yw2lEK2KHFBJ/g49Ir3iAdghjiv7sNiIoeOHyvMH0LKhMOBv2DHVkKaDCXiX6qzTtFv93deJrlKi2mryqyq2WKHHXwOq+DlJYpQKf7n/8eP/x+08/358eH3745fHh/rfHhw8/PT58+LWS6plEVTNADOKYgjbQh47QanGG6TTnNep3u5oZaXqkgc+kXybpyarKNJ10tey4pP2d4ZiqGfdRsubO4WBwzI1QK+N5o4WM4FYobr6QBLTBAe579m4u06O78Xi5c1jhzlotZbgQhdOp1Jf2kkEcTej0Ds8aiULNwAt8OSqm+8b8LrfkddKS1p0F35AEu8zIZBBOOtFNVS1AR+yj18UsdbY2WeSUVJM6tOHp0laMQ91GQybpjWPvrEyFscUt9aRXeP10stV65rlX7nS4l0aKMCy2syMU5qZdDkdet7D3yAq2zzN+3THx827Hz+OHr78hRtdV+dyZf2vvE+7KhNyl/irF8+79h/3VCc2cm0SDIU90WzufnIk97eVJMGqWmMh3zWKUL5xaM2rOGAWXahryGLIwI8kfZoFpQLKre0h2qFzdT8PsK8V0Leqb0RPxGFKmfZ6UL+0A+SnKIVneg3QD2qAZOXN7V9m+1PJ8yiB7GTygVd94ooHL76+nB9GgCAAA",
// add your Session Id
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY KHAN-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/7zfdcq.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "KHAN-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "KHAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "92342758XXXX",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Jᴀᴡᴀᴅ TᴇᴄʜX",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/149k8x.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *KHAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923427582273",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
