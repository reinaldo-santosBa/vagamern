import { TokenFcmController } from '../controllers/tokenFCM';
import express from 'express';

export const TokenFcmRoutes = express.Router();
const tokenFcmController = new TokenFcmController();
TokenFcmRoutes.get('/', tokenFcmController.get);
TokenFcmRoutes.post('/', tokenFcmController.create);