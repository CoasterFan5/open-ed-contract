import crypto from 'crypto';

export const hashPassword = (params: { password: string; salt?: string }) => {
	const salt = params.salt ?? crypto.randomBytes(128).toString('base64url');

	const hash = crypto
		.pbkdf2Sync(params.password, salt, 100_000, 128, 'sha512')
		.toString('base64url');

	return {
		hash,
		salt
	};
};
