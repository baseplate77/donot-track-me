// const getredirectUrl =
const followRedirect = require("follow-redirect-url");

module.exports.getLastRedirectUrl = async (url) => {
  try {
    const urls = await followRedirect.startFollowing(
      url
      //   "https://www.instagram.com/reel/CS9FBPVjl8z/?utm_source=ig_web_button_share_sheet"
    );
    console.log("urls", urls);
    return urls[urls.length - 1]["url"];
  } catch (e) {
    console.log(e);
    throw e;
  }
};
