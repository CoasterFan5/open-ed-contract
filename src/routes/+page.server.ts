import { getDb } from '$lib/server/db';
import { task } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (params) => {
	const db = getDb(params.platform?.env);

	await db.insert(task).values({
		title: 'hello',
		priority: 1
	});

	const items = await db.select().from(task);
	return { items };
};
