DROP DATABASE wanderflix;

CREATE DATABASE wanderflix;

USE wanderflix;

CREATE TABLE `users` (
  `user_id` varchar(15) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(15) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_email_UNIQUE` (`user_email`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`)
);



CREATE TABLE `user_profile` (
  `user_id` varchar(15) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `user_language` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`)
) ;
    

 
CREATE TABLE `user_watchlist` (
  `user_id` varchar(15) NOT NULL,
  `movie_id` varchar(50) NOT NULL,
  `watchlist_id` varchar(15) NOT NULL,
  PRIMARY KEY (`watchlist_id`),
  UNIQUE KEY `user_id_UNIQUE` (`user_id`),
  UNIQUE KEY `watchlist_id_UNIQUE` (`watchlist_id`)
);

CREATE TABLE `user_review` (
  `user_id` varchar(15) NOT NULL,
  `movie_id` varchar(15) NOT NULL,
  `review_id` varchar(15) NOT NULL,
  `star_rating` varchar(5) DEFAULT NULL,
  `user_comment` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`review_id`),
  UNIQUE KEY `review_id_UNIQUE` (`review_id`)
);