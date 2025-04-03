const express = require("express");
const cors = require("cors");
const { notesRouter } = require("./router");
require("dotenv").config();
require("./database/dbConfig");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("/notes", notesRouter);

app.listen(PORT, () =>
  console.log(`Server Started at: http://localhost:${PORT}`)
);
