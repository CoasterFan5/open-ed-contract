import { checkAuth } from '$lib/server/checkAuth';
import { contractTable, softwareTable } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';
import type { PageServerLoad } from './$types';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const { database } = await checkAuth();

	const software = await database
		.select()
		.from(softwareTable)
		.where(eq(softwareTable.slug, params.slug))
		.get();

	if (!software) {
		throw error(404, 'Not found');
	}

	const items = database
		.select()
		.from(contractTable)
		.where(eq(contractTable.software_id, software.id));

	return {
		items,
		software
	};
};
