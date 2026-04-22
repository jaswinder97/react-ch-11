import BookmarkContext from "../store/bookmark-context";
import { use } from "react";

function BookmarkSummary({ ind }) {
  const { bookmarkedArticles } = use(BookmarkContext);
  console.log("BookmarkSummary component rendered with ind:", ind);
  console.log("BookmarkSummary props:", { bookmarkedArticles: bookmarkedArticles[ind] });

  return (
    <div className="bookmark-summary">
      <p>{bookmarkedArticles[ind] && bookmarkedArticles[ind]["title"]}</p>
    </div>
  )
}

export default BookmarkSummary