import React from 'react';

const Home = () => (
  <div className="home-page">
    <div className="home-content">
      <div className="home-badge">Welcome</div>
      <h1 className="home-title">
        Math
        {' '}
        <span className="title-highlight">Magicians</span>
      </h1>
      <p className="home-description">
        Where numbers dance and wisdom speaks. Explore our mathematical toolkit
        to perform calculations with precision, or discover profound quotes that
        illuminate the mind.
      </p>
      <div className="home-features">
        <div className="feature-card">
          <div className="feature-icon">∑</div>
          <h3>Calculator</h3>
          <p>Perform calculations with our elegant mathematical engine</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">✎</div>
          <h3>Quotes</h3>
          <p>Discover inspiration from the world&apos;s greatest thinkers</p>
        </div>
      </div>
    </div>
    <div className="math-pattern" />
  </div>
);

export default Home;
