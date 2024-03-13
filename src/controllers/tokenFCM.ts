import { Request, Response } from 'express';
import { TokenFcmService } from '../service/tokenFCM';
export class TokenFcmController {
	async get(request: Request, response: Response): Promise<Response> {
		const tokenFcmService = new TokenFcmService();
		const tokenFcmServiceGet = await tokenFcmService.get();
		return response.status(200).json(tokenFcmServiceGet);
	}
	async create(request: Request, response: Response): Promise<Response> {
		const { token } = request.body;
		const tokenFcmService = new TokenFcmService();
		const tokenFcmServiceCreate = await tokenFcmService.create(token);
		return response.status(200).json(tokenFcmServiceCreate);
	}
}