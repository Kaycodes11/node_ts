import express, {
    Application,
    ErrorRequestHandler,
    NextFunction,
    Request,
    Response,
} from "express";
import {startConnection} from "./db";
import createHttpError from "http-errors";
import {Server} from "http";
import cors from "cors";
import morgan from "morgan";
import {config} from "dotenv";
import TaskRouter from "./routes/task.route";
import AuthRouter from "./routes/auth.route";
import PhotoRouter from "./routes/photo.route"
import ProfileRouter from "./routes/profile.route"
import {createConnection} from "net";
import {randomInt, randomBytes} from "crypto";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import {options} from "./swaggerOptions";
import * as path from "path";
import * as fs from 'fs';
import {ErrorMessages} from "./utils/ErrorMessages";
import {AppDataSource} from "./data-source";


config();
startConnection();

const app: Application = express();

AppDataSource.initialize().then(() => {
        console.log('server has connected to db successfully');
        app.use(cors());
        app.use(morgan("dev"));
        app.use(express.json());
        app.use(express.urlencoded({extended: true})); // enable parsing url-encode value from client
        const specs = swaggerJSDoc(options);

        const randomNumber = randomBytes(4).toString("hex");
        console.log(`SIMM-${randomNumber}`, path.join(process.cwd(), 'utils'));

// file handing
        fs.writeFile('newFile.txt', "Hello, TypeScript is awesome ", (error) => {
            if (error) {
                console.error(error)
            }
        });

// fs.writeFile(path.join(process.cwd(), 'utils', 'fileName.txt'), (err, data) => {} )

        app.get("/", (req: Request, res: Response, next: NextFunction) => {
            // console.log(db.get('tasks').value());

            res.status(200).json({message: "Homepage"});
        });

// app.use((req: Request, res: Response, next: NextFunction) => {
//   next(new createHttpError.NotFound());
// });

// the global route middleware
        app.use(AuthRouter);
        app.use(PhotoRouter);
        app.use(ProfileRouter);
        app.use(TaskRouter);
        app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));
// the global logger middleware
        const loggerMiddleware = (request: Request, response: Response, next: NextFunction) => {
            console.log(`HERE: ${request.method} ${request.path}`);
            return next();
        }
        app.use(loggerMiddleware);

// the loggerMiddleware applies to every routes that comes after it like below "/greet"
// so for example when client request "greet" then loggerMiddleware will run and do its work
        app.get("/greet", (request: Request, response: Response) => {
            response.send("Hello TypeScript");
        });

// error handler must have error as first parameter
        const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
            res.status(err.status || 500).json({
                status: err.status || 500,
                message: err.message || ErrorMessages.UNKNOWN,
            });
        };

// the global error middleware
        app.use(errorHandler);

// app.set('port', Number(process.env.PORT) || 30001)

// app.get('port', () => console.log(`Server started on 3001`));

        const PORT: Number = Number(process.env.PORT) || 3001;
        const server: Server = app.listen(PORT, () =>
            console.log(`Server Started now at the ${PORT}`)
        );
    }
).catch(error => console.error("ERROR: ", error));

