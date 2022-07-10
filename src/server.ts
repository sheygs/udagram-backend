import express, { Application } from 'express';
import bodyParser from 'body-parser';
import indexRouter from './routes/index';

(async () => {
        // Init the Express application
        const app: Application = express();

        // Set the network port
        const port: number = Number(process.env.PORT) || 8082;

        // Use the body parser middleware for post requests
        app.use(bodyParser.json());

        // index Route
        app.use(indexRouter);

        // Start the Server
        app.listen(port, () => {
                console.log(`server running http://localhost:${port}
                \npress CTRL+C to stop server`);
        });
})();
