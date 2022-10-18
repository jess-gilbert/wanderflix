INSERT INTO wanderflix.users (user_email, user_password,first_name, last_name) 
VALUES ( 'ozge@gmail.com' , '1234', 'Ozge', 'Ozersahin'),
		( 'carey@gmail.com' , '4567', 'Carey', 'Yuen'),
        ( 'nicola@gmail.com' , '5678', 'Nicola', 'Ward'),
        ( 'jess@gmail.com', '1289','Jess', 'Gilbert'),
        ( 'daniela@gmail.com', '3456', 'Daniela', 'M');
     
     
        
 INSERT INTO wanderflix.user_watchlist (user_id, movie_id)
 VALUES ('16','tt0944947'),
		('17','tt0944947'),
        ('18','tt0944947'),
        ('19','tt0944947'),
        ('20','tt0944947');
        
        
 INSERT INTO wanderflix.user_review ( user_id , movie_id, star_rating, user_comment)
 VALUES ('16','tt0944947','4.0','I like the scenario'),
		('17','tt0944947','4.1','I love this actress'),
        ('18','tt0944947','4.5','Way better than I expected'),
        ('19','tt0944947','4.2','Nice work'),
        ('20','tt0944947','4.3.','Love the movie');