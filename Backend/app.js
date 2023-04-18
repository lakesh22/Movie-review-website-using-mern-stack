const express = require("express");
require("./db");
const userRouter = require("./routes/user");

const app = express();
app.use(express.json());
app.use("/api/user", userRouter);
app.get("/", (req, res) => {
  res.send("<h1>Hello I am from backend");
});

app.listen(8001, () => {
  console.log("server started at port 8000");
});
