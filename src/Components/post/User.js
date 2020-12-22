import React, {Component} from 'react';

class User extends Component {
    render() {
        let {item, onSelectPost} = this.props
        return (
            <div>
                userId: {item.userId} <br/>
                Title: {item.title} <br/>
                Post: {item.body}<br/>
                <button onClick={()=> onSelectPost(item.id)}>chose this post</button>
                <hr/>
            </div>
        );
    }
}

export default User;