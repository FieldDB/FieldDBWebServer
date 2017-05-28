require('babel-register')

var compression = require("compression");
var config = require("config");
var express = require("express");
var debug = require("debug")("server");
var favicon = require("serve-favicon");
var logger = require("morgan");
var methodOverride = require("method-override");
var session = require("express-session");
var bodyParser = require("body-parser");
var errorHandler = require("./middleware/error-handler").errorHandler;
var consolidate = require("consolidate");
var path = require("path");

var activityRoutes = require("./routes/activity").router;
var corpora = require("./lib/corpora");
var corpusRoutes = require("./routes/corpus").router;
var userRoutes = require("./routes/user").router;
var reduxRender = require("./routes/react-render").reduxRender;
var acceptSelfSignedCertificates = {
  strictSSL: false
};
if (process.env.NODE_ENV === "production") {
  acceptSelfSignedCertificates = {};
}

if (config.offline) {
  var requestSampleData = require('./config/offline').requestSampleData;
  requestSampleData(config);
}

var app = express();

// configure Express
app.engine("html", consolidate.handlebars);
app.set("view engine", ".html");
app.set("views", path.join(__dirname, "views"));
app.use(favicon(__dirname + "/public/favicon.ico"));
app.use(logger("common"));
app.use(methodOverride());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.session_key
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, "public")));


app.use(compression())

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "dist", "public")))
} else {
  app.use("/assets", express.static(path.join(__dirname, "app", "assets")))
  app.use(express.static(path.join(__dirname, "dist")))
}

app.get("/", function(req, res, next) {
  res.render("site", {
    title: "",
    body: "",
    partials: {
      m_scripts: "partials/home"
    }
  });
});
app.get("/download", function(req, res, next) {
  res.render("site", {
      title: "",
      body: "",
      partials: {
        m_scripts: "partials/download"
      }
    });
});
app.get("/people", function(req, res, next) {
  res.render("site", {
    title: "",
    body: "",
    partials: {
      m_scripts: "partials/people"
    }
  });
});
app.get("/technology", function(req, res, next) {
  res.render("site", {
    title: "",
    body: "",
    partials: {
      m_scripts: "partials/technology"
    }
  });
});
app.get("/tutorials", function(req, res, next) {
  res.render("site", {
    title: "",
    body: "",
    partials: {
      m_scripts: "partials/tutorials"
    }
  });
});
app.get("/projects", function(req, res, next) {
  res.render("site", {
    title: "",
    body: "",
    partials: {
      m_scripts: "partials/projects"
    }
  });
});

/*
 * Routes
 */

app.get('/api/corpora', function(req, res, next) {
  corpora.getAllCorpora().then(function(results) {
    res.json(results);
  }, next).catch(next)
});
app.use('/api/activity', activityRoutes);
app.use('/api/users', userRoutes);
app.use('/api', corpusRoutes);

app.get("*", reduxRender);

// error handling middleware should be loaded after the loading the routes
app.use(errorHandler);

module.exports = app;
