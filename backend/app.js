import express from "express";
import dotenv from "dotenv";
import user_model from "./Models/user.js";
import dbConfig from "./config/dbConfig.js";
import user_route_api from "./routes/user_route.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

dbConfig.dbConnection();

// importing router - 1
app.use("/api", user_route_api);



app.listen(port, () => {
  console.log(`Server is listening on the ${port} port`);
});
