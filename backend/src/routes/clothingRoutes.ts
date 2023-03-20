import { NextFunction, Request, Response, Router } from 'express';

const clothingRoutes = Router();

clothingRoutes.post('/', (req: Request, res: Response, next: NextFunction) => res.status(200).json({ ok: true }));
clothingRoutes.get('/:clothingId', (req: Request, res: Response, next: NextFunction) => res.status(200).json({ ok: true }));

export default clothingRoutes;