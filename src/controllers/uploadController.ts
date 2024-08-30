import { Request, Response } from 'express';
import { extractMeasurementFromImage } from '../services/geminiService';
import { v4 as uuidv4 } from 'uuid';

export const uploadImage = async (req: Request, res: Response) => {
  try {
    const { image, customer_code, measure_datetime, measure_type } = req.body;

    if (!image || !customer_code || !measure_datetime || !['WATER', 'GAS'].includes(measure_type.toUpperCase())) {
      return res.status(400).json({
        error_code: "INVALID_DATA",
        error_description: "Missing or invalid required fields",
      });
    }

    const measureValue = await extractMeasurementFromImage();

    const measureUUID = uuidv4();

    console.log(`Image uploaded for customer: ${customer_code}, measure type: ${measure_type}`);

    return res.status(200).json({
      image_url: 'https://imagens.usp.br/wp-content/uploads/aguafotomarcossantos020.jpg',
      measure_value: measureValue,
      measure_uuid: measureUUID,
    });
  } catch (error) {
    console.error('Error processing image:', error);
    return res.status(500).json({
      error_code: "SERVER_ERROR",
      error_description: "An error occurred while processing the image",
    });
  }
};
