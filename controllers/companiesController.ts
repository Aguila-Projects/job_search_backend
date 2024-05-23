import { NextFunction, Request, Response } from 'express';
import { Company, Job, JobSource } from '../db';
import { Op } from 'sequelize';

/**
 * FETCH ALL COMPANIES FROM THE COMPANY TABLE
 */
export const getAllCompanies = async (req: Request, res: Response) => {
  try {
    const companies = await Company.findAll({
      include: [JobSource],
      order: [['name', 'ASC']],
    });
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch companies' });
  }
};
