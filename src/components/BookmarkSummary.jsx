function BookmarkSummary({ title, url }) {
  console.log("BookmarkSummary props:", { title, url});

  return (
    <div className="bookmark-summary">
      <p>{title}</p>
    </div>
  )
}

export default BookmarkSummary