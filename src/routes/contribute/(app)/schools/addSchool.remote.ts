import { form } from '$app/server';
import { checkAuth } from '$lib/server/checkAuth';
import { schoolsTable } from '$lib/server/db/schema';
import z from 'zod';
import { getSchools } from './getSchools.remote';

export const addSchool = form(
	z.object({
		name: z.string().min(1).max(128).nonoptional(),
		location: z.string().min(1).max(128).nonoptional(),
		page: z.coerce.number<string>(),
		perPage: z.coerce.number<string>()
	}),
	async ({ name, location, page, perPage }) => {
		const { database } = await checkAuth();

		console.info('Adding School');

		await database
			.insert(schoolsTable)
			.values({
				name,
				location
			})
			.returning()
			.get();

		getSchools({
			perPage,
			page,
			query: ''
		}).refresh();
	}
);
