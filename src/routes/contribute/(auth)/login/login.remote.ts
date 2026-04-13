import { resolve } from '$app/paths';
import { form, getRequestEvent } from '$app/server';
import { createSession } from '$lib/server/createSession';
import { getDb } from '$lib/server/db';
import { usersTable } from '$lib/server/db/schema';
import { hashPassword } from '$lib/server/hashPassword';
import { error, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

export const loginForm = form(
	z.object({
		email: z.email(),
		password: z.string()
	}),
	async ({ email, password }) => {
		const { cookies, platform } = getRequestEvent();
		const db = getDb(platform?.env);

		// format the email
		const formattedEmail = email.trim().toLowerCase();

		const u = await db.select().from(usersTable).where(eq(usersTable.email, formattedEmail)).get();

		if (!u) {
			return;
		}

		const { hash, salt } = hashPassword({
			salt: u.salt,
			password
		});

		if (hash !== u.hash) {
			return;
		}

		await createSession({
			user: u,
			db: db,
			cookies
		});

		console.info('account login');

		throw redirect(303, resolve('/contribute/portal'));
	}
);
