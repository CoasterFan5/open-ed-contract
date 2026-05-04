import { checkAuth } from '$lib/server/checkAuth';
import { softwareTable } from '$lib/server/db/schema';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const { database } = await checkAuth();

	const software = database.select().from(softwareTable);

	return { software };
};
