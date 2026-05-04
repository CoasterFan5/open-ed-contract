import { form } from '$app/server';
import { checkAuth } from '$lib/server/checkAuth';
import { softwareTable } from '$lib/server/db/schema';
import z from 'zod';

export const addSoftware = form(
	z.object({
		name: z.string().min(1).max(256).nonoptional(),
		slug: z.string().min(1).max(32).nonoptional()
	}),
	async ({ name, slug }) => {
		const { database } = await checkAuth();

		await database.insert(softwareTable).values({
			name,
			slug
		});
	}
);
