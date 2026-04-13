import { resolve } from '$app/paths';
import { form, getRequestEvent } from '$app/server';
import { createSession } from '$lib/server/createSession';
import { getDb } from '$lib/server/db';
import { usersTable } from '$lib/server/db/schema';
import { hashPassword } from '$lib/server/hashPassword';
import { error, redirect } from '@sveltejs/kit';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

export const registerAccount = form(
	z.object({
		email: z.email(),
		password: z.string()
	}),
	async ({ email, password }) => {
		const { cookies, platform } = getRequestEvent();
		const db = getDb(platform?.env);

		// format the email
		const formattedEmail = email.trim().toLowerCase();

		// check if a user already exists
		const userCheck = await db
			.select()
			.from(usersTable)
			.where(eq(usersTable.email, formattedEmail))
			.get();
		if (userCheck) {
			//TODO: since this is a simple project that needs to be done by the end of a semester, this is some scuffed logic. There is a github issue regarding it.
			error(400, {
				message: 'Email in use.'
			});
		}

		const { hash, salt } = hashPassword({
			password
		});

		const u = await db
			.insert(usersTable)
			.values({
				email: formattedEmail,
				hash,
				salt
			})
			.returning()
			.get();

		console.info('account registered');

		await createSession({
			user: u,
			cookies,
			db
		});

		throw redirect(303, resolve('/contribute/portal'));
	}
);
