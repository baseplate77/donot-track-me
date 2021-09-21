// const getredirectUrl =
const followRedirect = require("follow-redirect-url");
const { handleRedirectToLogin } = require("./handleRedirectToLogin");

module.exports.getLastRedirectUrl = async (url) => {
  try {
    const urls = await followRedirect.startFollowing(
      url
      //   "https://www.instagram.com/reel/CS9FBPVjl8z/?utm_source=ig_web_button_share_sheet"
    );
    console.log("urls", urls);
    const redirectUrl = urls[urls.length - 1]["url"];
    if (redirectUrl.includes("login/") || redirectUrl.includes("account/"))
      return urls[urls.length - 2]["url"];
    return redirectUrl;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
