import { Request, Response } from 'express';
export declare abstract class CrudController {
    create(req: Request, res: Response): void;
    read(req: Request, res: Response): void;
    update(req: Request, res: Response): void;
    delete(req: Request, res: Response): void;
}
