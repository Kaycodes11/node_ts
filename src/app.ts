import express, {
  Application,
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
// import { startConnection } from "./db";
import createHttpError from "http-errors";
import { Server } from "http";
// import db from "./db";
import cors from "cors";
import morgan from "morgan";
import TaskRouter from "./routes/task.route";
import { config } from "dotenv";

config();
// startConnection();

const app: Application = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // console.log(db.get('tasks').value());
  
  res.status(200).json({ message: "Homepage" });
});

// app.use((req: Request, res: Response, next: NextFunction) => {
//   next(new createHttpError.NotFound());
// });

// the global route middleware
app.use(TaskRouter);

// error handler must have error as first parameter
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || "Unable to process your request right now",
  });
};

// the global error middleware
app.use(errorHandler);

// app.set('port', Number(process.env.PORT) || 30001)

// app.get('port', () => console.log(`Server started on 3001`));

const PORT: Number = Number(process.env.PORT) || 3001;

const server: Server = app.listen(PORT, () =>
  console.log(`Server Started now at ${PORT}`)
);
