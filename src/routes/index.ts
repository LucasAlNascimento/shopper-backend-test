import { Router } from 'express';
import uploadRoutes from './uploadRoutes';
import confirmRoutes from './confirmRoutes';
import listRoutes from './listRoutes';

const router = Router();

router.use('/upload', uploadRoutes);
router.use('/confirm', confirmRoutes);
router.use('/:customer_code/list', listRoutes);

export default router;
