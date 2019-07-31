import React from 'react';
import axios from 'axios';

const Post = (props) => (
    <>
        {props.posts.map((post, i) => (
            <div className="post">
                <h2>User Id: {post.userId}</h2>
                <h2>Title: {post.title}</h2>
                <h4>{post.body}</h4> 
            </div>
        ))}

    </>



)

export default Post