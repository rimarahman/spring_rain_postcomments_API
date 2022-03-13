import React, { useEffect, useState } from 'react';
import Post from './Post';
import './AllPost.css'

const AllPost = () => {
    const[allpost, setAllpost]=useState([])
    useEffect(()=>{

                fetch('https://jsonplaceholder.typicode.com/posts?fbclid=IwAR1Li6FeqO3ngqLc9CCxaqSymCiorxMlw9RZD9Km-GHbu_kxONRuuYF98PE')
               .then(response => response.json())
               .then(json => setAllpost(json))

    }, [])
    return (
    <div className='card_cotainer'>
         <div>
              <h1> DETAILS </h1>
        </div>

        <div >
           {
               allpost.map( post => <Post key={post.id} value={post}></Post>)
           }
        </div>
    </div>
    );
};

export default AllPost;