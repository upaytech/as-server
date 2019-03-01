import { Request, Response, NextFunction } from 'express';

/**
 * Handles controller execution and responds to the end-user.
 * All the errors bubble up to this function and is then passed
 * to the errorHandler middleware.
 * @param asyncController Controller that always returns a promise
 * @param getParams A function that maps to our desired controller parameters
 */
function controllerHandler(asyncController: any, getParams: any) {
  return async function controllerMiddleware(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const boundParams = getParams ? getParams(req, res, next) : [];
    try {
      const result = await asyncController(...boundParams);
      return res.json(result || { message: 'OK' });
    } catch (error) {
      next(error);
    }
  };
}

export default controllerHandler;
