import { query } from '$app/server';
import { checkAuth } from '$lib/server/checkAuth';
import { schoolsTable } from '$lib/server/db/schema';
import { z } from 'zod';

export const getSchools = query(
	z.object({
		query: z.string().optional(),
		page: z.number().describe('The zero-based page index'),
		perPage: z.number()
	}),
	async ({ query, page, perPage }) => {
		const { database } = await checkAuth();

		const s = await database.select().from(schoolsTable).limit(perPage);

		console.log(s);

		return s;
	}
);
