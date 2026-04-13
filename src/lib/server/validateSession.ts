import { redirect, type Cookies } from '@sveltejs/kit';
import type { Database } from './db';
import { resolve } from '$app/paths';
import { sessionsTable, usersTable } from './db/schema';
import { eq } from 'drizzle-orm';

const goToLogin = () => {
	return redirect(303, resolve('/contribute/(auth)/login'));
};

export const validateSession = async ({
	cookies,
	database
}: {
	cookies: Cookies;
	database: Database;
}) => {
	const sessionToken = cookies.get('session');

	if (!sessionToken) {
		throw goToLogin();
	}

	const u = await database
		.select()
		.from(sessionsTable)
		.where(eq(sessionsTable.token, sessionToken))
		.leftJoin(usersTable, eq(usersTable.id, sessionsTable.userId))
		.get();

	if (!u?.users) {
		throw goToLogin();
	}

	return u.users;
};
