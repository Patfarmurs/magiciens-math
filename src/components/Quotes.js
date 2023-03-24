import React, { useState, useEffect } from 'react';

function Quotes() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      'https://api.api-ninjas.com/v1/quotes',
      {
        headers: {
          'X-Api-Key': 'd76LF6zNycu/CHxSaA15fg==11p2yK3MxtmTzr16',
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setError(null);
        setQuote(data[0].quote);
        setAuthor(data[0].author);
        setCategory(data[0].category);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message);
      });
  }, []);

  return (
    <div className="quotes">
      {
        loading || error ? (
          <div className={loading ? 'loading' : 'error'}>
            {loading ? <div className="loader" /> : `Error: ${error}` }
          </div>
        ) : (
          <>
            {quote}
            <div className="quote-author_category">
              -
              {' '}
              {author}
              {' '}
              (
              {category}
              )
            </div>
          </>
        )
      }
    </div>
  );
}

export default Quotes;
