import { Request, Response } from 'express';
import { filterImageFromURL, deleteLocalFiles } from '../util/util';
import { sendErrorResponse } from '../util/response';

// @TODO1

// GET /filteredimage?image_url={{URL}}
// endpoint to filter an image from a public url.
// IT SHOULD
//    1. validate the image_url query
//    2. call filterImageFromURL(image_url) to filter the image
//    3. send the resulting file in the response
//    4. deletes any files on the server on finish of the response

// QUERY PARAMATERS
// image_url: URL of a publicly accessible image

export default async (req: Request, res: Response) => {
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
};
