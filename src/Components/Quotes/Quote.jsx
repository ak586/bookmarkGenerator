
import { BsFillBookmarkPlusFill } from 'react-icons/bs'



const addBookmark = () => {
    console.log("bookmark added");
};
const Quote = ({quote,author,id}) => {

  return (
      <div className='quote' style={{height:"auto"}}>
          <h1>{quote}</h1>
          <div>
              <h2>- {author}</h2>
          <button className='bookmark-button' onClick={addBookmark}> <BsFillBookmarkPlusFill/> </button>
          </div>

    </div>
  )
}

export default Quote;