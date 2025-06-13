import express from "express";
import cors from "cors";

import user from "./routes/user.routes.js";
import "./config/env.config.js"

const app = express();

const PORT = 3000 || process.env.PORT

app.use(express.json());
app.use(cors());

app.use("/user", user);

app.listen(PORT, () => console.log("Server is running on PORT: ", PORT));
