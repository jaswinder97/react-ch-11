import BookmarkSummary from "./BookmarkSummary"
function BookmarkInformation({ title, url }) {
  return (
    <div className="bookmark-information">
      <BookmarkSummary title={title} url={url} />
    </div>
  )
}

export default BookmarkInformation