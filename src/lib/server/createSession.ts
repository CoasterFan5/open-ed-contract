import type { Cookies } from '@sveltejs/kit';
import { type Database } from './db';
import { sessionsTable, type usersTable } from './db/schema';
import crypto from 'crypto';

type User = typeof usersTable.$inferSelect;

export const createSession = async ({
	user,
	db,
	cookies
}: {
	user: User;
	db: Database;
	cookies: Cookies;
}) => {
	const s = crypto.randomBytes(128).toString('base64url');

	await db.insert(sessionsTable).values({
		token: s,
		userId: user.id
	});

	cookies.set('session', s, {
		path: '/',
		sameSite: 'lax'
	});

	return s;
};
