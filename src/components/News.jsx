import Article from './Article';
import InfoSidebar from './InfoSidebar';
import BookmarkContext from '../store/bookmark-context';

import { useState, useEffect, Fragment } from 'react';

function News() {
  const [articles, setArticles] = useState([]);
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=Nifty 50&sortBy=publishedAt&apiKey=5a6928ea560c41f281d0f2e5d8470032')
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  const bookmarkContextValue = {
    bookmarkedArticles: articles
  };

  function handleBookmark(article) {
    console.log('Bookmarking article:', article);
    setBookmarkedArticles(prevBookmarks => [...prevBookmarks, article]);
  }

  return (
    <div>
      <h2>Latest News</h2>
      {articles.length === 0 ? (
        <p>Loading news...</p>
      ) : (
        <ul>
          <BookmarkContext.Provider value={bookmarkContextValue}>
          {articles.map((article,index) => (
            <Fragment key={article.url}> 
              <Article ind={index} />
              <InfoSidebar ind={index} onClick={() => handleBookmark(article)} />
            </Fragment>
          ))}
          </BookmarkContext.Provider>
        </ul>
      )}
    </div>
  );
}

export default News;