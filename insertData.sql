COPY users (name, counts, profilephoto, location) FROM '/Users/Kevin/Documents/HackReactor githubs/Capstone/SDC/fakeDataGenerator/data/users.txt';
COPY photos (src, review_id, restaurant_id) FROM '/Users/Kevin/Documents/HackReactor githubs/Capstone/SDC/fakeDataGenerator/data/photos.txt';
COPY restaurants (name) FROM '/Users/Kevin/Documents/HackReactor githubs/Capstone/SDC/fakeDataGenerator/data/restaurants.txt';
COPY reviews (date, counts, rating, user_id, restaurant_id, description) FROM '/Users/Kevin/Documents/HackReactor githubs/Capstone/SDC/fakeDataGenerator/data/reviews.txt';