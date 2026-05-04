import { getRequestEvent } from '$app/server';
import { redirect } from '@sveltejs/kit';
import { getDb } from './db';
import { validateSession } from './validateSession';
import { resolve } from '$app/paths';

/**
 * To be called in remote functions to check for auth
 *
 * **DONT CALL ANYWHERE ELSE**
 *
 * Takes no args, throws error if unauthorized
 * Returns a user and a database to prevent having to call getRequestEvent twice
 */
export const checkAuth = async () => {
	const requestEvent = getRequestEvent();

	const database = getDb(requestEvent.platform?.env);

	const u = await validateSession({ cookies: requestEvent.cookies, database });

	if (!u.isVerified) {
		console.log(`${u.email} is not verified`);
		throw redirect(303, resolve('/contribute/(auth)/login'));
	}

	return {
		user: u,
		database,
		requestEvent
	};
};
