// test.js
import MovieRental from './movieRental.js';

const rentalSystem = new MovieRental();

// Adding movies
rentalSystem.addMovie('Phir Hera Pheri', 'Comedy', 2006, 5, 7.3, 3);
rentalSystem.addMovie('Welcome', 'Comedy', 2007, 3, 7.1, 2);

// Listing all movies
console.log('All Movies:', rentalSystem.listAllMovies());

// Renting a movie
rentalSystem.rentMovie('Phir Hera Pheri', 'Faneshwar Gite');
rentalSystem.rentMovie('Welcome', 'Faneshwar Gite');

// Listing available movies
console.log('Available Movies: Welcome', rentalSystem.listAvailableMovies());

// Returning a movie
rentalSystem.returnMovie('Phir Hera Pheri', 'Faneshwar Gite');

// Listing available movies after return
console.log('Available Movies After Return: After 2 movies will be Available', rentalSystem.listAvailableMovies());

// Calculate total revenue
console.log('Total Revenue:', rentalSystem.calculateTotalRevenue());
