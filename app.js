const express = require("express");
const app = express();
const port = process.env.PORT || 3002;

app.use("/static", express.static("./static"));
app.get("/", (req, res) => res.type("html").send(html));
app.get("/gim", (req, res) =>
    res.redirect("https://www.goedkoopisolatiemateriaal.nl")
);
app.get("/fly", (req, res) =>
    res.redirect("https://www.flyspeedy.com")
);
app.get("/flyops", (req, res) =>
    res.redirect("https://www.flyspeedy.com/opscenter")
);
app.get("/gh", (req, res) =>
    res.redirect("https://www.github.com/jaoord")
);
app.get("/links", (req, res) =>
    res.redirect("https://app.raindrop.io/my/0")
);


const server = app.listen(port, () =>
    console.log(`yogm.dev listening on port ${port}!`)
);

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>yogm.dev</title>
   <link rel="stylesheet" href="./static/main.css" type="text/css">
  </head>
  <body id="home">
    <section>
        <h1>yogm.dev</h1>
        <p>I &#9829; code</p>
    </section>
  </body>
</html>
`;