// add hostname to handle to url accordingly
module.exports.removeTracker = (hostname, url) => {
  switch (hostname.split(".")[0]) {
    case "youtube":
      if (url.includes("&")) return url.split("&")[0];
      return url;
    default:
      return url.split("?")[0];
  }
};
