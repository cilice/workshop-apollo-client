import * as React from 'react';
import MovieList from './MovieList';

class App extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <h1>Movies List</h1>
        </header>
        <MovieList />
      </div>
    );
  }
}

const styles = {
  container: {
    maxWidth: 900,
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default App;
