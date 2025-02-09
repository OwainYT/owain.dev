const express = require("express");
const app = express();
const port = process.env.PORT || 80;

app.use("/static", express.static("./static"));
app.get("/", (req, res) => res.type("html").send(html));

app.get("/spy", (req, res) =>
    res.redirect("https://www.flyspeedy.com")
);

app.get("/links", (req, res) =>
    res.redirect("https://www.google.com")
);

app.get("/adm", (req, res) =>
    res.redirect("")
);
const server = app.listen(port, () =>
    console.log(`listening on port ${port}!`)
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>owain.dev</title>
   <link rel="stylesheet" href="./static/main.css" type="text/css">
  </head>
  <body id="home">
    <section>
        <h1>owain.dev</h1>
        <p>I &#9829; code</p>
        <p>welcome to my website :)</p>
        <h2>Links</h2>
        <p>/links /spy /help<p>
        <p>hello world</p>
    </section>
  </body>
</html>
`;