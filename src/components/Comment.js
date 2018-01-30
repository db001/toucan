import React, { Component } from 'react';
import '../styles/comment.css';


class Comment extends Component {
  render () {

    const comment = this.props.comment;

    return (
      <div className="comment">
        {comment}
      </div>
    )
  }
}

export default Comment;