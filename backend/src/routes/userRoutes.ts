import { NextFunction, Request, Response, Router } from 'express';

const userRoutes = Router();

userRoutes.post('/register', (req: Request, res: Response, next: NextFunction) => res.status(200).json({ ok: true }));
userRoutes.get('/login', (req: Request, res: Response, next: NextFunction) => res.status(200).json({ ok: true }));

export default userRoutes;