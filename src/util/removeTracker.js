// add hostname to handle to url accordingly
module.exports.removeTracker = (hostname, url) => {
  switch (hostname) {
    case "youtube.com":
      if (url.includes("&")) return url.split("&")[0];
      return url;
    case "play.google.com":
      return url;
    default:
      return url.split("?")[0];
  }
};
