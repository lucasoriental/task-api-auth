import express from "express";
import cors from "cors";

import user from "./routes/user.routes.js";
import tasks from "./routes/tasks.routes.js";
import "./config/env.config.js";
import cookieParser from "cookie-parser";

const app = express();

const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/user", user);
app.use("/tasks", tasks);

app.listen(PORT, () => console.log("Server is running on PORT: ", PORT));
