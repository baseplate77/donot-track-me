const express = require("express");
const app = express();
// util
const { getLastRedirectUrl } = require("./util/getLastRedirectUrl");
const { getHostName } = require("./util/getHostName");
const { removeTracker } = require("./util/removeTracker");

const port = process.env.PORT || 5000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", async (req, res) => {
  const initialUrl = req.query.url;
  try {
    const redirectUrl = await getLastRedirectUrl(
      "https://youtu.be/M3mJkSqZbX4"
    );
    const hostname = getHostName(redirectUrl);
    const finialUrl = removeTracker(hostname, redirectUrl);

    res.send(JSON.stringify({ initialUrl, finialUrl, hostname }));
  } catch (e) {
    res.send({ error: e });
  }
});

app.listen(port, async (req, res) => {
  console.log("server started at", port);
});
