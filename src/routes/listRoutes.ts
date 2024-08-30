import { Router } from 'express';
import { listMeasurements } from '../controllers/listController';

const router = Router();

router.get('/', listMeasurements);

export default router;
