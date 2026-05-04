import { form } from '$app/server';
import { checkAuth } from '$lib/server/checkAuth';
import z from 'zod';

export const addContract = form(
	z.object({
		seatCost: z.coerce.number<string>(),
		file: z.file()
	}),
	async ({ pricePerSeat, file }) => {
		const { database, requestEvent } = await checkAuth();

		console.log('Uploading...');

		const p = await requestEvent.platform?.env.R2.put('0', file);
	}
);
