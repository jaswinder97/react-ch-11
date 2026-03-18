import BookmarkInformation from "./BookmarkInformation"
function InfoSidebar({ children }) {
  return (
    <aside>
        <BookmarkInformation children={children}/>      
    </aside>
  )
}

export default InfoSidebar