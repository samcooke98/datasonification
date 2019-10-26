const API_KEY = "vJCjkbsGKCdcukot4WQf43aXpNwOvtfZ97Js";
const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/v1/tp/",
    proxy({
      target: "https://api.transport.nsw.gov.au/",
      changeOrigin: true,
      headers: {
        Authorization: "apikey " + API_KEY
      }
    })
  );
};

console.log("Custom Proxying");
// throw new Error('test');
