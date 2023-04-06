
import { BsFillBookmarkPlusFill } from 'react-icons/bs'




const Quote = ({quote,author,id}) => {

  return (
      <div className='quote' style={{height:"auto"}}>
          <h1>{quote}</h1>
          <div>
              <h2>- {author}</h2>
          <button > <BsFillBookmarkPlusFill/> </button>
          </div>
         

    </div>
  )
}

export default Quote