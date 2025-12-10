import express from "express"
import initDB from "./config/db";
import router from "./routes";

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))

initDB()

app.use("/api/v1/", router)


app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "route not found",
    path: req.path,
  });
});

export default app
