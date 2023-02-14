import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs";
import csv from "csv-parser";

// Connect to the database using the DATABASE_URL environment
//   variable injected by Railway

const app = express();

const upload = multer({ dest: "uploads/" });
// app.use(bodyParser.json());
app.use(express.json());
// Permitir cualquier origen
app.use(cors() ,(req,res,next) => {
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Content-Type', 'application/json');
  next();
  
});
app.use(express.json());

app.post("/api/lucho", upload.single('file') ,async (req, res) => {
  
  res.send(JSON.stringify({ message: 'Hello World!' , message2: `el reqbody es: ${req.body.mensaje}`}));
  console.log("mensajito");
});

const port = process.env.PORT || 3333;

// app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
// app.use(bodyParser.text({ type: "text/html" }));


// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   next();
// });

app.get("/", async (req, res) => {
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
