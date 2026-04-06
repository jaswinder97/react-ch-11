import Article from './Article';
import InfoSidebar from './InfoSidebar';

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
          {articles.map((article,index) => (
            <Fragment key={article.url}> 
              <Article title={article.title} url={article.url} />
              <InfoSidebar title={article.title} url={article.url} onClick={() => handleBookmark(article)} />
            </Fragment>
          ))}
        </ul>
      )}
    </div>
  );
}

export default News;