import express from "express";
import dotenv from "dotenv";
import user_model from "./Models/user.js";
import dbConfig from "./config/dbConfig.js";
import user_route_api from "./routes/user_route.js";
import cors from "cors";


dotenv.config();

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

dbConfig.dbConnection();

// importing router - 1
// http://localhost:5000/api/user_details  - API 1 - URL
app.use("/api", user_route_api);




app.listen(port, () => {
  console.log(`Server is listening on the ${port} port`);
});
