import bodyParser from "body-parser";
import express from "express";
import pg from "pg";
import cors from "cors";

// Connect to the database using the DATABASE_URL environment
//   variable injected by Railway

const app = express();
// app.use(bodyParser.json());
app.use(express.json());
// Permitir cualquier origen
app.use(cors(),(req,res) => {
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Content-Type', 'application/json');
  app.use(express.json());
  res.send(JSON.stringify({ message: 'Hello World!' , message2: `el reqbody es: ${req.body}`}));
  
});

const port = process.env.PORT || 3333;

// app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
// app.use(bodyParser.text({ type: "text/html" }));


// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });
app.post("/api/lucho", async (req, res) => {
  // console.log(req.body);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({ message: 'Hello World!' }))
});

app.get("/", async (req, res) => {
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
