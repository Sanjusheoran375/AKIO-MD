/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'Paste your session id here';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "263";
const author = process.env.STICKER_AUTHOR || 'SANJU-DOKHEBAJ';
const packname = process.env.PACKNAME || 'DHOKEBAJ-SANJU';
const dev = process.env.DEV || '919728893187';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'DHOKEBAH-BOT';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'true';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
  prefix,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
