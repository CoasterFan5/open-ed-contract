import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	dialect: 'sqlite',
	migrations: {
		table: '__drizzle_migrations'
	},
	dbCredentials: {
		url: './db'
	},
	verbose: true,
	strict: true
});
