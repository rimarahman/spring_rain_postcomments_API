import React from 'react';
import '../Allpost/post.css'

const Comments = (props) => {
    console.log(props);

        const { id, name, email, body } = props.value;
             //console.log(props)
        return (
            <div className='card_view'>
                <h2> ID : {id}</h2>
                <h3>Name : {name}</h3>
                <h4>Email : {email}</h4>
                <p>Body : {body}</p>
            </div>
        );
    };

    export default Comments;