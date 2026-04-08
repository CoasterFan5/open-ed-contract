import { drizzle } from 'drizzle-orm/d1';
import * as schema from './schema';

export const getDb = (env?: Env) => {
	if (!env?.DB) throw new Error('DB binding is not set');
	return drizzle(env.DB, { schema });
};
