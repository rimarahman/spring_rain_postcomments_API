import React from 'react';
import { Link } from 'react-router-dom';
import './post.css';

const Post = (props) => {

    const { id, title, body } = props.value;
    // console.log(props)

    return (


        <div className='card_view'>

            <h2> ID : {id}</h2>
            <h3>{title}</h3>
            <p>{body}</p>

            <Link to={`/comments/${id}`}>
                <button >Details</button>
            </Link>


        </div>
    );
};

export default Post;