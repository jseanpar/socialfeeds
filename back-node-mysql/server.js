const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const myconn = require("express-myconnection");
const config = require("./config");

//rutas
const routesUsers = require("./routes/routesUsers");
const routeFeed = require("./routes/routesFeeds");
const routeAuth = require("./routes/routesAuth");

const app = express();
app.set("port", config.PORT);
const port = app.get("port");

//parametros de conexion
const dbOptions = {
  host: config.HOST,
  port: config.MYSQL_PORT,
  user: config.USER,
  password: config.PASSWORD,
  database: config.DATABASE,
};

//middlewares
app.use(myconn(mysql, dbOptions, "single"));
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:9000"],
    methods: ["GET","POST"],
    credentials: true
}));

//rutas
app.get("/", (req, res) => {
  res.send("Bienvenido a la api");
});

app.use("/users", routesUsers);
app.use("/feeds", routeFeed);
app.use("/login", routeAuth);

// servidor corriendo
app.listen(port, () => {
  console.log("servidor corriendo en puerto", port);
});
