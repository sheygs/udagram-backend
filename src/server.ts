import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { filterImageFromURL, deleteLocalFiles } from './util/util';
import { sendSuccessResponse, sendErrorResponse } from './util/response';

(async () => {
        // Init the Express application
        const app = express();

        // Set the network port
        const port: number = Number(process.env.PORT) || 8082;

        // Use the body parser middleware for post requests
        app.use(bodyParser.json());

        // @TODO1

        // GET /filteredimage?image_url={{URL}}
        // endpoint to filter an image from a public url.
        // IT SHOULD
        //    1. validate the image_url query
        //    2. call filterImageFromURL(image_url) to filter the image
        //    3. send the resulting file in the response
        //    4. deletes any files on the server on finish of the response

        // QUERY PARAMATERS
        //    image_url: URL of a publicly accessible image

        // Root Endpoint
        app.get('/', async (req: Request, res: Response) => {
                return sendSuccessResponse(res, 200, 'Okay');
        });

        app.get('/filteredimage', async (req: Request, res: Response) => {
                const { image_url } = req.query as any;
                try {
                        if (!image_url) {
                                return sendErrorResponse(res, 400, 'Image Url is required', null);
                        }

                        const result = await filterImageFromURL(image_url);

                        res.status(200).sendFile(result, function () {
                                deleteLocalFiles([result]);
                        });
                } catch (error) {
                        return sendErrorResponse(res, 400, 'Invalid Image Url Link', null);
                }
        });

        // Start the Server
        app.listen(port, () => {
                console.log(`server running http://localhost:${port}
                \npress CTRL+C to stop server`);
        });
})();
