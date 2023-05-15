import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default () => {
    const [postList, setPosts] = useState({});

    const fetchPostList = async() => {
        
        const res = await axios.get('http://localhost:4000/posts');

        setPosts(res.data);
    
    };

    useEffect(
        () => {
            fetchPostList();
        },
        []
    );

    const renderedPosts = Object.values(postList).map(post => {
        return (
        <div 
            className='card' 
            style={{width: '30%', marginBottom: '20px'}}
            key={post.id}
        >
            <div
                className='card-body'
            >
                <h3>{post.title}</h3>
                <CommentList postId={post.id} />
                <CommentCreate postId={post.id} />
            </div>
        </div>
        );
    });

    console.log(postList);
    return (
    <div
        className='d-flex flex-row flex-wrap justify'
    >
        {renderedPosts}
    </div>
    );
};