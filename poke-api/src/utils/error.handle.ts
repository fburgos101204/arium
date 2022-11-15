import { Response } from 'express';

const ErrorHandle = (res: Response, error: string) => {
    res.status(500);
    res.send({ error });
}
export { ErrorHandle };