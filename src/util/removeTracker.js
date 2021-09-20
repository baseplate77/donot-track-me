// add hostname to handle to url accordingly
module.exports.removeTracker = (hostname, url) => {
  switch (hostname.split(".")[0]) {
    case "youtube":
      return url;
    default:
      return url.split("?")[0];
  }
};
