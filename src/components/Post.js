import React, { Component } from 'react';
import Comment from './Comment';
import '../styles/post.css';

// Convert timestamp to day and month
const convertDate = dateString => {
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const convertedDate = new Date(dateString);
  const day = `0${convertedDate.getDate()}`.slice(-2);
  const month = monthNames[convertedDate.getMonth()];

  return {
    day,
    month
  };
};

class Post extends Component {
  render () {

    const data = this.props.data;  

    return (
      <div className="container">
      <h1>Posts</h1>
      { data.posts.map(post => {
        return (
          <div
            key={`post-${post.date}`}
            className="post"
          >
            <div className="post-container">
              <div className="date">
                <div>
                  <div className="date-day">
                    {convertDate(post.date).day}. 
                  </div>
                  <div className="date-month">
                    {convertDate(post.date).month}              
                  </div>
                </div>              
              </div>
              
              <div className="post-content">
                <div className="post-body">             
                    <h3>{post.headline}</h3>                
                    <p className="post-text">
                      {post.text_content}
                    </p>                
                </div>
                <div className="button-container">
                    <div>
                      <i class="fa fa-times" aria-hidden="true"></i>
                    </div>
                    <div>  
                      <i class="fa fa-commenting" aria-hidden="true"></i>
                    </div>
                  </div>
              </div>
            </div>

            <div className="comment-container">
              {post.comments.length > 0 ?
                post.comments.map((comment, index) => {
                  return (
                    <Comment
                      key={index}
                      comment={comment}
                    />
                  ) 
                }) : null
              }
            </div>
          </div>
        )
      })} 
      </div>
    )  
  }
};

export default Post;