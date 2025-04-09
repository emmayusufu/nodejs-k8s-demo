import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to kubernetes");
});

app.get("/greeting", (req, res) => {
  res.send("Good morning");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
