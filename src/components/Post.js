import React, { Component } from 'react';
import Comment from './Comment';
import '../styles/post.css';

class Post extends Component {
  render () {

    const data = this.props.data;

    // Convert timestamp to day and month
    const convertDate = dateString => {

      const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
      ];

      const convertedDate = new Date(dateString);
      const day = convertedDate.getDate();
      const month = monthNames[convertedDate.getMonth()];
      return {
        day,
        month
      };
    };

    return (
      <div>
      { data.posts.map(post => {
        return (
          <div
            key={`post-${post.date}`}
            className='post'
          >
            <div>
              <span>
                {convertDate(post.date).day}. 
              </span>
              <span>
                {convertDate(post.date).month}              
              </span>
            </div>              
            <h3>
              {post.headline}
            </h3>
            <p>
              {post.text_content}
            </p>
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
        )
      })} 
      </div>
    )  
  }
};

export default Post;