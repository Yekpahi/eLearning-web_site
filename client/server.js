const express = require("express");
const http = require('http');
const https = require('https');
const fs = require('fs');

const ports = {
  http: 3080,
  https: 3000
}
const next = require("next");
const { createProxyMiddleware } = require("http-proxy-middleware");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const options = { 
  key: fs.readFileSync("./localhost-key.pem"),
  cert: fs.readFileSync("./localhost.pem"),
};
app
  .prepare()
  .then(() => {
    const server = express();
    //apply proxy in dev mode
    if (dev) {
      server.use(
        "/api",
        createProxyMiddleware({
          target: "http://localhost:8000",
          changeOrigin: true,
        })
      );
    }

    server.all('*', (req, res) => {
      return handle(req, res)    
    });
    http.createServer(server).listen(ports.http);
    https.createServer(options, server).listen(ports.https, err => {
      if (err) throw err;
      console.log(`> Ready on https://localhost:${ports.https}`);
    }) 
  });









