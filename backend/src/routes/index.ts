import { Router } from 'express';
import clothingRoutes from './clothingRoutes';
import userRoutes from './userRoutes';

const indexRouter = Router();

indexRouter.use('/users', userRoutes);
indexRouter.use('/clothings', clothingRoutes);

export default indexRouter;