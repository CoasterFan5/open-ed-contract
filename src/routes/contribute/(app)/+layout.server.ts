import { getDb } from '$lib/server/db';
import { validateSession } from '$lib/server/validateSession';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async (e) => {
	const database = getDb(e.platform?.env);

	const user = await validateSession({
		cookies: e.cookies,
		database
	});

	return { user };
};
