import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';
import { createId } from '@paralleldrive/cuid2';

export const usersTable = sqliteTable('users', {
	id: text('id').primaryKey().$defaultFn(createId),
	email: text().unique().notNull(),
	salt: text().notNull(),
	hash: text().notNull(),
	isVerified: integer({ mode: 'boolean' })
});

export const schoolsTable = sqliteTable('schools', {
	id: text('id').primaryKey().$defaultFn(createId),
	name: text().notNull()
});

export const softwareTable = sqliteTable('software', {
	id: text('id').primaryKey().$defaultFn(createId),
	name: text().notNull()
});

export const contractTable = sqliteTable('contracts', {
	id: text('id').primaryKey().$defaultFn(createId),
	school_id: text()
		.notNull()
		.references(() => schoolsTable.id, {
			onDelete: 'cascade'
		}),
	software_id: text()
		.notNull()
		.references(() => softwareTable.id, {
			onDelete: 'cascade'
		}),
	start_date: integer({ mode: 'timestamp' }),
	end_date: integer({ mode: 'timestamp' }),
	invoice_id: text().notNull()
});

export const priceComponentTable = sqliteTable('priceComponents', {
	id: text('id').primaryKey().$defaultFn(createId),
	contract_id: text()
		.notNull()
		.references(() => contractTable.id, {
			onDelete: 'cascade'
		}),
	amount: integer(),
	period: text({
		enum: ['ONCE', 'YEAR', 'MONTH']
	}),
	unitType: text({
		enum: ['user', 'total']
	}),
	markAsCalculated: integer({
		mode: 'boolean'
	})
});
