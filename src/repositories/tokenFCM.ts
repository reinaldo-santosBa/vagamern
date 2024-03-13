import { modelTokenFCM } from '../models/tokenFCM';
import { Token } from '../types/tokenFCM';

export class TokenFcmRepository {
	public async create(token: string): Promise<Token> {
		return new Promise((resolve, reject) => {
			const modelTokensFCM = new modelTokenFCM({ token });
			modelTokensFCM.save()
				.then((token) => resolve(token))
				.catch(() => reject(false));
		});
	}
	public async readAll(): Promise<Token[]> {
		return new Promise((resolve, reject) => {
			modelTokenFCM.find()
				.then((token) => resolve(token))
				.catch(() => reject(false));
		});
	}
}