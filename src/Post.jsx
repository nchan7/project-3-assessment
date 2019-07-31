import React from 'react';
import axios from 'axios';

const Post = (props) => (
    <>
        <button className='button' onClick={props.onLeftClick}>⬅️</button>
        <button className='button' onClick={props.onRightClick}>➡️</button>
        {props.posts.map((post, i) => (
            <div className="post">
                <h3>User Id: {post.userId}</h3>
                <h3>Title: {post.title}</h3>
                <h4>{post.body}</h4> 
            </div>
        ))}

    </>



)

export default Post