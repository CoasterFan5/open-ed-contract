ALTER TABLE `software` ADD `slug` text NOT NULL;--> statement-breakpoint
CREATE UNIQUE INDEX `software_slug_unique` ON `software` (`slug`);