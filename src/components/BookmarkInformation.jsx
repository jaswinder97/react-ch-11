import BookmarkSummary from "./BookmarkSummary"

function BookmarkInformation({ ind}) {

  return (
    <div className="bookmark-information">
      <BookmarkSummary ind={ind} />
    </div>
  )
}

export default BookmarkInformation