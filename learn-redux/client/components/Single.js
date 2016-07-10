import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
    render() {
        const postId = this.props.params.postId;

        const i = this.props.posts.findIndex((post) => post.code === postId);
        console.log('index', i);
        const post = this.props.posts[i];
        const postComments = this.props.comments[postId] || [];
        

        // get us the post
        return (
            <div className="photo-grid">
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props} />
            </div>
        )
    }
});

export default Single;