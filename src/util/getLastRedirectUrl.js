// const getredirectUrl =
const followRedirect = require("follow-redirect-url");

module.exports.getLastRedirectUrl = async (url) => {
  try {
    const urls = await followRedirect.startFollowing(url);
    console.log("urls", urls);
    let redirectUrlIndex = urls.length - 1;
    let redirectUrl = urls[redirectUrlIndex]["url"];

    // if the last redirect url is login than return second last url
    while (isRestricUrls(redirectUrl) && redirectUrlIndex != 0) {
      redirectUrlIndex--;
      redirectUrl = urls[redirectUrlIndex]["url"];
    }
    console.log("redirect index", redirectUrlIndex);
    return urls[redirectUrlIndex]["url"];
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const isRestricUrls = (url) => {
  return (
    url.includes("/login") ||
    url.includes("/account") ||
    url.includes("/signup")
  );
};
