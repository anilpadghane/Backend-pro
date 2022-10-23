const express = require("express");

const app = express();

const dataRouter = require("./Routes/data");

const cors = require("cors");

app.use(cors());

app.use("/api", dataRouter);

app.listen(process.env.PORT || 8010, () => {
  console.log("seerver connecting PORT 8010");
});