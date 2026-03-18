function Article({ title, url, id }) {
  
  return (
    <article>
       <li key={id}>
          <a href={url}>{title}</a>
       </li>
    </article>
  );
}

export default Article;