import { TokenFcmRepository } from '../repositories/tokenFCM';
import { Token } from '../types/tokenFCM';

export class TokenFcmService {
	private serviceTokenFcm = new TokenFcmRepository();

	public async get(): Promise<Token[]>{
		return new Promise((resolve, reject) => {
			this.serviceTokenFcm.readAll()
				.then((tokens) => resolve(tokens))
				.catch(() => reject(false));
		});
	}
	public async create(token: string): Promise<Token> {
		return new Promise((resolve, reject) => {
			this.serviceTokenFcm.create(token)
				.then((token) => resolve(token))
				.catch(() => reject(false));
		});
	}
}