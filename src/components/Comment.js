import React, { Component } from 'react';

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