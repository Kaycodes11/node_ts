import express, {
  Application,
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import createHttpError from "http-errors";
import { Server } from "http";
import { config } from "dotenv";

config();

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ message: "Homepage" });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
});

// error handler must have error as first parameter
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || "Unable to process your request right now",
  });
};

// the global error middleware
app.use(errorHandler);

const PORT: Number = Number(process.env.PORT) || 3001;

const server: Server = app.listen(PORT, () =>
  console.log(`Server Started now at ${PORT}`)
);
