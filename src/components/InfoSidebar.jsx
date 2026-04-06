import BookmarkInformation from "./BookmarkInformation"
function InfoSidebar({ title, url, onClick }) {

  console.log("InfoSidebar props:", { title, url });
  

  return (
    <aside>
        <BookmarkInformation title={title} url={url} />
        <button onClick={onClick} style={{ cursor: 'pointer' }}>Bookmark</button>
    </aside>
  )
}

export default InfoSidebar