import bodyParser from "body-parser";
import express from "express";
import pg from "pg";
import cors from "cors";

// Connect to the database using the DATABASE_URL environment
//   variable injected by Railway
// const pool = new pg.Pool();

const app = express();
app.use(cors());
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  // const { rows } = await pool.query("SELECT NOW()");
  // res.send(`Hello, World! The time from the DB is ${rows[0].now}`);
  res.send(`Hello, World! The time from the DB is`);

});

app.get("/api/lucho", async (req, res) => {
  console.log("FUx");
  res.send(`Hello, World! The time from the DB is`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});