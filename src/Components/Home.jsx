import React, { useState, useEffect } from 'react';
import Quote from '../Components/Quotes/Quote';
import axios from 'axios';


const Home = () => {
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [tags, setTags] = useState(null);
    const [currentTag, setCurrentTag] = useState('');

    const [id, setId] = useState([]);
    const [isPending, setIsPending] = useState(true);

    const url = 'https://api.quotable.io';
    useEffect(() => {
        axios
            .get(url + '/quotes/random')
            .then(response => {
                setQuote(response.data[0].content);
                setAuthor(response.data[0].author);
                setId(response.data[0]._id);
                setCurrentTag(response.data[0].tags[0]);
                setIsPending(false);
            })
            .catch(err => console.log(err));
        axios.get(url + "/tags").then((response) => {
            setTags(response.data);
        }).catch((err) => console.log(err));
    }, []);


    //generate new quote
    const generateQuote = () => {
        axios
            .get(url + '/quotes/random?tags=' + currentTag)
            .then(response => {
                setQuote(response.data[0].content);
                setAuthor(response.data[0].author);
                setId(response.data[0]._id);
                setCurrentTag(response.data[0].tags[0]);
            }).catch(err => console.log(err));
    }
    
    


    return (
        <div>

            {!isPending && <Quote author={author} quote={quote} id={id} />}
            {!isPending && <section className='form-section'>
                <form >
                    <select id="tags" name="tags" value={currentTag} onChange={(e)=> setCurrentTag(e.target.value)}>
                        {tags && tags.map((item, index) => (
                            <option key={index} value={item.name}>{item.name}</option>)
                        )}
                    </select>
                </form>
                <button  onClick={generateQuote} > Next Quote </button>

            </section>}
            {isPending && <div>Loading...</div>}


        </div>
    );
};

export default Home;
