import { Response } from 'express';

export const confirmMeasurement = (res: Response) => {
  res.status(200).json({ success: true });
};
