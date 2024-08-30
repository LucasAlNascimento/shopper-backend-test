import { Request, Response } from 'express';

export const listMeasurements = (req: Request, res: Response) => {
  res.status(200).json({
    customer_code: req.params.customer_code,
    measures: [
      {
        measure_uuid: 'uuid_placeholder',
        measure_datetime: new Date(),
        measure_type: ['WATER', 'GAS'],
        has_confirmed: false,
        image_url: 'url_placeholder',
      },
    ],
  });
};
