import { Router } from 'express';

export const api: Router = Router();

api.get('/hello', (req, res) => {
    res.status(200).json({ message: 'Hello, world! hasdklfjalsdkjf' });
});
