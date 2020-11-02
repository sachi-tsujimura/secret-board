"use strict";
const fs = require("fs");

function handleLogout(req, res) {
  res.writeHead(401, {
    "Content-Type": "text/plain; chrset-utf-8",
  });
  res.end("Logout");
}

function handleNotFound(req, res) {
  res.writeHead(404, {
    "Content-Type": "text/plain; chrset-utf-8",
  });
  res.end("Can not find the page");
}

function handleBadRequest(req, res) {
  res.writeHead(400, {
    "Content-Type": "text/plain; chrset-utf-8",
  });
  res.end("Can not use this Request");
}

function handleFavicon(req, res) {
  res.writeHead(200, {
    "Content-Type": "image/vnd.microsoft.icon",
  });
  const favicon = fs.readFileSync("./favicon.ico");
  res.end(favicon);
}

module.exports = {
  handleLogout,
  handleNotFound,
  handleBadRequest,
  handleFavicon,
};
