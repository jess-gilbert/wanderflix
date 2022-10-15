INSERT INTO wanderflix.users (user_id, user_email, user_password) 
VALUES ('1', 'ozge@gmail.com' , '1234'),
		('2', 'carey@gmail.com' , '4567'),
        ('3', 'nicola@gmail.com' , '5678'),
        ('4', 'jess@gmail.com', '1289'),
        ('5', 'daniela@gmail.com', '3456');
     
INSERT INTO wanderflix.user_profile (user_id,first_name, last_name, user_language)
VALUES ('1','Ozge','Ozersahin', 'ENG'),
		('2','Carey','Yuen','ENG'),
        ('3','Nicola','Ward', 'ENG'),
        ('4','Jess','Gilbert', 'ENG'),
        ('5','Daniela','M', 'ENG');
        

        
 INSERT INTO wanderflix.user_watchlist (user_id, movie_id, watchlist_id)
 VALUES ('1','tt0944947','10'),
		('2','tt0944947','11'),
        ('3','tt0944947','12'),
        ('4','tt0944947','13'),
        ('5','tt0944947','14');
        
 INSERT INTO wanderflix.user_review ( user_id , movie_id, review_id, star_rating, user_comment)
 VALUES ('1','tt0944947','abc','4.0','I like the scenario'),
		('2','tt0944947','xyz','4.1','I love this actress'),
        ('3','tt0944947','def','4.5','Way better than I expected'),
        ('4','tt0944947', 'dlm','4.2','Nice work'),
        ('5','tt0944947','klm','4.3.','Love the movie');