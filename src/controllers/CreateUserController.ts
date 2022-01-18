import { Request, Response } from 'express';

class CreateUserController {
  handle(req: Request, res: Response) {
    return res.json([
      {
        name: 'Diego',
      },
    ]);
  }
}

export { CreateUserController };
