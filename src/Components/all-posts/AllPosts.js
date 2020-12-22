import React, {Component} from 'react';
import User from "../post/User";

class AllPosts extends Component {

    state = {posts: [], chosenPost: null};

    /*    constructor() {
            super();
        }*/
    onSelectPost = (index) => {
        let {posts} = this.state;
        console.log(index);
        let find = posts.find(post => post.id === index);
        console.log(find);
        this.setState({chosenPost: find})
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {
                this.setState({posts});
            });
    }

    render() {
        let {posts, chosenPost} = this.state;
        return (
            <div>
                <hr/>
                <hr/>
                {
                    chosenPost && <h2>{chosenPost.userId} {chosenPost.title}</h2>
                }
                <hr/>
                <hr/>
                {
                    posts.map((post, index) => <User item={post} key={index} onSelectPost={this.onSelectPost}/>)
                }

            </div>
        );
    }
}

export default AllPosts;