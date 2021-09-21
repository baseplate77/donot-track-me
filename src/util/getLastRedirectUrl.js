// const getredirectUrl =
const followRedirect = require("follow-redirect-url");

module.exports.getLastRedirectUrl = async (url) => {
  try {
    const urls = await followRedirect.startFollowing(url);
    console.log("urls", urls);
    const redirectUrl = urls[urls.length - 1]["url"];
    // if the last redirect url is login than return second last url
    if (redirectUrl.includes("login/") || redirectUrl.includes("account/"))
      return urls[urls.length - 2]["url"];
    return redirectUrl;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
