import BookmarkSummary from "./BookmarkSummary"
function BookmarkInformation({ children }) {
  return (
    <div className="bookmark-information">
      <h2>Bookmark Information</h2>
      <BookmarkSummary children={children}/>
    </div>
  )
}

export default BookmarkInformation