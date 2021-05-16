// const express = require("express");
// const morgan = require("morgan"); //middleware application logger
// const nunjucks = require("nunjucks");

// const app = express(); // crea una instancia de una aplicación de express

// // Configurando Nunjucks
// app.set("view engine", "html"); // hace que res.render funcione con archivos html
// app.engine("html", nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
// nunjucks.configure("views"); // apunta a nunjucks al directorio correcto para los templates

// app.use(morgan("tiny"));

// let tweetsDeEjemplo = [
//   { id: 1, name: "juan", content: "este es un tweeettt de juan" },
//   { id: 2, name: "carlos", content: "este es un tweeettt de carlos" },
//   { id: 3, name: "pepe", content: "este es un tweeettt de pepe" },
// ];

// app.get("/", function (req, res) {
//   res.render("index", { tweets: tweetsDeEjemplo });
// });

// app.listen(4000, function () {
//   console.log("Estas escuhando en el puerto 4000");
// });

// *********************************************

const express = require("express");
const morgan = require("morgan");
const nunjucks = require("nunjucks");

const fs = require("fs");
const path = require("path");
const routes = require("./routes");

//Instanciando express
const app = express();
app.use(express.json());
app.use(express.urlencoded()); // estrae el body

// const accessLogStream = fs.createWriteStream(
//   path.join(__dirname, "access.log"),
//   {
//     flags: "a",
//   }
// );
// app.use(morgan("tiny"));
// app.use(morgan("combined", { stream: accessLogStream }));

app.use("/", routes);

app.use(express.static("./public")); // Trae todos los hijos del path
//COnfigurando nunjucks
app.set("view engine", "html"); // hace que res.render funcione con archivos html
app.engine("html", nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure("views"); // apunta a nunjucks al directorio correcto para los templates

// app.use(function (req, res, next) {
//   const data = [{ name: "Full" }, { name: "Stacker" }, { name: "Son" }];
//   res.render("index", { title: "Hall of Fame", personas: data });
// });

//Login middleware
// app.use((req, res, next) => {
//   console.log("req.method", req.method);
//   console.log("req.path", req.path);
//   next(); //Pasa al siguiente middleware
// });

//Primer middleware
// app.use("/", (req, res, next) => {
//   console.log("Llego a /");
//   res.send("Bienvenido a la pagina de inicio");
// });

app.listen(3000, () => {
  console.log("Escuchando puerto 3000");
});
