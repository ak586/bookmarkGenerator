
import { BsFillBookmarkPlusFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux';



const Quote = ({ quote, author, id }) => {
    const dispatch = useDispatch();

    const addBookmarks = (options) => {
         dispatch({ type: "addBookmark", payload:options });
        // console.log(options);
    }
  return (
      <div className='quote' style={{height:"auto"}}>
          <h1>{quote}</h1>
          <div>
              <h2>- {author}</h2>
          <button className='bookmark-button' onClick={()=>addBookmarks({quote, author,id})}> <BsFillBookmarkPlusFill/> </button>
          </div>

    </div>
  )
}

export default Quote;