import { Router } from 'express';
import { confirmMeasurement } from '../controllers/confirmController';

const router = Router();

router.patch('/', confirmMeasurement);

export default router;
