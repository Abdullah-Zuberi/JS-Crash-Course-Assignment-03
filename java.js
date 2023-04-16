// Define the movie data
const movies = [
    {
      title: 'Godzilla vs. Kong',
      genre: 'Action',
      rating: 7.5,
      year: 2021
    },
    {
      title: 'Justice League',
      genre: 'Action',
      rating: 8.2,
      year: 2021
    },
    {
      title: 'The Shawshank Redemption',
      genre: 'Drama',
      rating: 9.3,
      year: 1994
    },
    {
      title: 'The Dark Knight',
      genre: 'Action',
      rating: 9,
      year: 2008
    },
    {
      title: 'The Godfather',
      genre: 'Crime',
      rating: 9.2,
      year: 1972
    },
    {
      title: 'Pulp Fiction',
      genre: 'Crime',
      rating: 8.9,
      year: 1994
    },
    {
      title: 'Forrest Gump',
      genre: 'Drama',
      rating: 8.8,
      year: 1994
    },
    {
      title: 'Inception',
      genre: 'Action',
      rating: 8.8,
      year: 2010
    },
    {
      title: 'The Matrix',
      genre: 'Action',
      rating: 8.7,
      year: 1999
    },
    {
      title: 'Interstellar',
      genre: 'Sci-Fi',
      rating: 8.6,
      year: 2014
    }
  ];
  
  // Define a function to display movie recommendations
  function displayRecommendations() {
    // Get the user's preferences
    const genre = document.getElementById('genre').value;
    const year = parseInt(document.getElementById('year').value);
    const rating = parseInt(document.getElementById('rating').value);
  
    // Filter the movie data based on the user's preferences
    let filteredMovies = movies.filter(function(movie) {
      return (movie.genre === genre || genre === 'all') &&
             (movie.year === year || year === 'all') &&
             (movie.rating >= rating || rating === 'all');
    });
  
    // Create a string of HTML for the movie recommendations
    let recommendationsHTML = '';
    for (let i = 0; i < filteredMovies.length; i++) {
      recommendationsHTML += '<li>' + filteredMovies[i].title + '</li>';
    }
  
    // Update the recommendations list on the UI
    const recommendationsList = document.getElementById('recommendations');
    recommendationsList.innerHTML = recommendationsHTML;
  }
  
  // Add an event listener to the submit button to display movie recommendations
  const submitButton = document.getElementById('submit');
  submitButton.addEventListener('click', displayRecommendations);