import { Response } from 'express';

export const sendSuccessResponse = (res: Response, code: number, message: string, data?: any) => {
        res.status(code).json({
                code,
                status: 'success',
                message,
                data,
        });
};

export const sendErrorResponse = (res: Response, code: number, message: string, data?: any) => {
        res.status(code).json({
                code,
                status: 'failure',
                error: {
                        message,
                },
                data,
        });
};
