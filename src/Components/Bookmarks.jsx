
import { useSelector } from 'react-redux'
import Quote from './Quotes/Quote';



const Bookmarks = () => {
    
    
    const  data  = useSelector((state) => state.bookmark.bookmarks);
  return (
      <div className='bookmark-list'> 
          
          {data.length>0 && (
              data.map((bookmark, index) =>
              (
                  <Quote key={index} title={bookmark.title} author={bookmark.author} quote={bookmark.quote}  />
              )
              ))
          }
          {data.length===0 && ( <div><h1 style={{textAlign:"center"}}>No bookmarks to show</h1></div> )}
            
    </div>
  )
}

export default Bookmarks