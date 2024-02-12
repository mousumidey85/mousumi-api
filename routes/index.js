const express = require("express");

var indexRouter = require("./index");
var users = require("./users");
var enquiries = require("./enquiries");

module.exports = function(app) {
  app.use(express.json());

  app.use("/", indexRouter);
  app.use("/users", users);
  app.use("/enquiries", enquiries);
};