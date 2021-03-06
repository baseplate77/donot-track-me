const express = require("express");
const app = express();
// util
const { getLastRedirectUrl } = require("./util/getLastRedirectUrl");
const { getHostName } = require("./util/getHostName");
const { removeTracker } = require("./util/removeTracker");

const port = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", async (req, res) => {
  const initialUrl = req.body.url;
  console.log(req.body);
  console.log(initialUrl);
  try {
    const redirectUrl = await getLastRedirectUrl(initialUrl);
    const hostname = getHostName(redirectUrl);
    const finalUrl = removeTracker(hostname, redirectUrl);

    res.json({ initialUrl, finalUrl: finalUrl, hostname });
  } catch (e) {
    console.log("error", e);
    res.status(400).json({ error: true, msg: "Some Thing went worng" });
  }
});

app.listen(port, async (req, res) => {
  console.log("server started at", port);
});
