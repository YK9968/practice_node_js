import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUserController } from '../controllers/registerUserController.js';

const router = Router();

router.post('/', ctrlWrapper(registerUserController));

export default router;
