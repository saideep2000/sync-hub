import { Router } from 'express';
import { getMessage } from '../controllers/messageController';

const router = Router();

router.get('/', getMessage);

export { router as messageRouter };
