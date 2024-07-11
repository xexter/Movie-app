// import React from 'react';
// import './MovieCard.css';

// const MovieCard = ({ movie }) => {
//   return (
//     <div className="movie-card">
//       <img src={movie.image} alt={movie.title} className="movie-image" />
//       <h2 className="movie-title">{movie.title}</h2>
//       <h3 className="movie-subtitle">{movie.subtitle}</h3>
//       <p className="movie-description">{movie.description}</p>
//       <p className="movie-rating">Rating: {movie.rating}</p>
//     </div>
//   );
// };

// export default MovieCard;



import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card" style={{ backgroundImage: `url(${movie.image})` }}>
      <div className="movie-content">
        <img src={movie.image} alt={movie.title} className="movie-poster" />
        <div className="movie-details">
          <h2 className="movie-title">{movie.title}</h2>
          <h3 className="movie-subtitle">{movie.subtitle}</h3>
          <div className="movie-info">
            <span className="movie-year">{movie.year}</span>
            <span className="movie-director">{movie.director}</span>
            <span className="movie-duration">{movie.duration} min</span>
            <span className="movie-genres">{movie.genres.join(', ')}</span>
          </div>
          <p className="movie-description">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
