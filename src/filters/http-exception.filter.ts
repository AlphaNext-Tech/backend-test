import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpException,
} from '@nestjs/common';
import { Response } from 'express';

export function removeNullValues<T>(obj: T): T {
    const result: Partial<T> = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const value = obj[key];

            if (![null, undefined].includes(value)) {
                result[key] = value;
            }
        }
    }

    return result as T;
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus();

        const exceptionResponse = exception.getResponse();
        const responseBody = (
            typeof exceptionResponse === 'object' ? exceptionResponse : {}
        ) as {
            message?: string | string[];
            [key: string]: any;
        };

        // Ensure message is a string
        const message = Array.isArray(responseBody.message)
            ? responseBody.message.join(', ')
            : responseBody.message;

        response.status(status).json({
            code: status,
            userMessage: message,
            data: null,
            success: false,
            ...removeNullValues(responseBody),
            ...(true && status >= 420 && status <= 500
                ? { stack: exception.stack }
                : {}),
        });
    }
}
