import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comments from './comments';
import '../Allpost/AllPost.css'



const Allcomments = () => {

    const id = useParams();
    // console.log(id.id);
    const [allComments, setAllComments] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id.id}/comments`)
            .then(response => response.json())
            .then(json => setAllComments(json))

    }, [id])
    //console.log(comments);
    return (
        <div className='card_cotainer'>

            <div>
                <h1>COMMENTS</h1>
            </div>

            <div>
               {
                 allComments.map(m => <Comments key = {m.id} value = {m}></Comments>)
               }
            </div>
        </div>
    );
};

export default Allcomments;