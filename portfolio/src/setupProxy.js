const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api/form", { target: "http://localhost:3001" }));
  app.use(proxy("/api/fetch", { target: "http://localhost:3002" }));
};
