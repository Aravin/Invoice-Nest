import { NextFunction, Request, Response } from 'express';

const TENANT_HEADER = 'x-tenant-id';

export function tenancyMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction,
): void {
  req['tenantId'] = req.headers[TENANT_HEADER] || null;
  next();
}
