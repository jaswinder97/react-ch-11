import Article from './Article';
import InfoSidebar from './InfoSidebar';

import { useState, useEffect } from 'react';

function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=Nifty 50&sortBy=publishedAt&apiKey=5a6928ea560c41f281d0f2e5d8470032')
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error('Error fetching news:', error));
  }, []);

  return (
    <div>
      <h2>Latest News</h2>
      {articles.length === 0 ? (
        <p>Loading news...</p>
      ) : (
        <ul>
          {articles.map(article => (
            <>
              <Article key={article.url} title={article.title} url={article.url} id={article.author || 'Unknown'} />
              <InfoSidebar key={article.url} title={article.title} url={article.url} id={article.author || 'Unknown'} />
            </>
          ))}
        </ul>
      )}
    </div>
  );
}

export default News;