CREATE TABLE `contracts` (
	`id` text PRIMARY KEY NOT NULL,
	`school_id` text NOT NULL,
	`software_id` text NOT NULL,
	`start_date` integer,
	`end_date` integer,
	`invoice_id` text NOT NULL,
	FOREIGN KEY (`school_id`) REFERENCES `schools`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`software_id`) REFERENCES `software`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `priceComponents` (
	`id` text PRIMARY KEY NOT NULL,
	`contract_id` text NOT NULL,
	`amount` integer,
	`period` text,
	`unitType` text,
	`markAsCalculated` integer,
	FOREIGN KEY (`contract_id`) REFERENCES `contracts`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `schools` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `software` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL
);
--> statement-breakpoint
DROP TABLE `task`;