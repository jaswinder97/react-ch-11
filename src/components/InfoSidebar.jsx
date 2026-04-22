import BookmarkInformation from "./BookmarkInformation"
import BookmarkContext from "../store/bookmark-context";
import { use } from "react";

function InfoSidebar({ ind, onClick }) {

  const { bookmarkedArticles } = use(BookmarkContext);
  console.log("InfoSidebar props:", { ind, onClick });

  return (
    <aside>
        <BookmarkInformation ind={ind} title={bookmarkedArticles[ind].title} url={bookmarkedArticles[ind].url} />
        <button onClick={onClick} style={{ cursor: 'pointer' }}>Bookmark</button>
    </aside>
  )
}

export default InfoSidebar