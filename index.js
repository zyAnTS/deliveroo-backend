const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const data = require("./data.json");

app.get("/", (req, res) => {
  try {
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

app.all("*", (req, res) => {
  return res.status(404).json("Page not found");
});

app.listen(process.env.PORT, () => {
  console.log("Server Deliveroo started");
});
