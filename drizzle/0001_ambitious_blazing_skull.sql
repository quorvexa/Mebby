CREATE TABLE `newsletters` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`status` enum('subscribed','unsubscribed') NOT NULL DEFAULT 'subscribed',
	`subscribedAt` timestamp NOT NULL DEFAULT (now()),
	`unsubscribedAt` timestamp,
	CONSTRAINT `newsletters_id` PRIMARY KEY(`id`),
	CONSTRAINT `newsletters_email_unique` UNIQUE(`email`)
);
