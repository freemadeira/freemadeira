CREATE TABLE `posts` (
	`authors` text NOT NULL,
	`cover` text,
	`event_id` text NOT NULL,
	`html` text NOT NULL,
	`locale` text NOT NULL,
	`post_id` text NOT NULL,
	`published_at` integer NOT NULL,
	`reading_minutes` integer NOT NULL,
	`site` text NOT NULL,
	`slug` text NOT NULL,
	`summary` text NOT NULL,
	`title` text NOT NULL,
	`topics` text NOT NULL,
	`updated_at` integer NOT NULL,
	PRIMARY KEY(`site`, `post_id`, `locale`)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `posts_slug` ON `posts` (`site`,`locale`,`slug`);--> statement-breakpoint
CREATE INDEX `posts_published` ON `posts` (`site`,`locale`,`published_at`);--> statement-breakpoint
CREATE TABLE `profiles` (
	`name` text,
	`nip05` text,
	`picture` text,
	`pubkey` text PRIMARY KEY NOT NULL,
	`updated_at` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `slug_history` (
	`locale` text NOT NULL,
	`post_id` text NOT NULL,
	`site` text NOT NULL,
	`slug` text NOT NULL,
	PRIMARY KEY(`site`, `locale`, `slug`)
);
