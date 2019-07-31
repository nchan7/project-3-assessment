import React from 'react';
import axios from 'axios';
import Post from './Post';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: 1,
            posts: []
        }

        this.onLeftClick = this.onLeftClick.bind(this)
        this.onRightClick = this.onRightClick.bind(this)
        this.getPosts = this.getPosts.bind(this)
    }

    onLeftClick(e) {
        e.preventDefault();
        var userId = this.state.userId
        if (userId > 1) {
            userId--;
            this.setState({
                userId
            })
            // this.getPosts(this.state.userId);
        } else { 
            userId = 10;
            this.setState({
                userId
            })
        }
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(result => {
            let posts = result.data
            this.setState({
                posts
            })
        })        
    } 

    onRightClick(e) {
        e.preventDefault();
        var userId = this.state.userId
        if (userId < 10) {
            userId++;
            this.setState({
                userId
            })
        } else {
            userId = 1;
            this.setState({
                userId
            })
        }
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(result => {
            let posts = result.data
            this.setState({
                posts
            })
        })    
    } 

    componentDidMount() {
        var userId = this.state.userId;
        this.getPosts(userId);
    }

    getPosts(userId) {
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then(result => {
                let posts = result.data
                this.setState({
                    posts
                })
            })
    }

    render() {
        var postCopy = Array.from(this.state.posts);
        return (
            <>
                <h1>Cycle Through Users</h1>
                <Post posts={postCopy} onLeftClick={this.onLeftClick} onRightClick={this.onRightClick} />

            </>
        );
    }
}


export default App;
