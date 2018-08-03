import * as React from 'react';
import data from '../data';
import MovieTile from './MovieTile';

class MovieList extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        {(data.movies || data.likes).map(movie => (
          <MovieTile key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

const styles = {
  container: {
    maxWidth: 900,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default MovieList;
