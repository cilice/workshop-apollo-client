import React from 'react';

import Heart from './HeartIcon';

export default ({ movie: { title, poster, overview, score, isLiked } }) => (
  <div style={styles.container}>
    {poster ? (
      <img src={poster} style={styles.image} alt={title} />
    ) : (
      <p style={styles.image}>🎬 Poster coming soon</p>
    )}
    <div style={styles.content}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.overview}>{overview}</p>
      <p>
        {score > 0
          ? `Rating: ${score}/10 ${score > 5 ? '👏' : '👎'}`
          : 'Not rated yet!'}
      </p>
      <Heart active={isLiked} onClick={() => {}} />
    </div>
  </div>
);

const styles = {
  container: {
    height: 240,
    padding: 8,
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'top',
    marginBottom: 16,
  },
  image: {
    height: '100%',
    width: 'auto',
  },
  title: {
    marginTop: 0,
  },
  content: {
    marginLeft: 8,
    flex: 1,
  },
  overview: {
    marginTop: 8,
  },
};
