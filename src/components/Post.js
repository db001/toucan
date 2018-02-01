import React, { Component } from 'react';
import Comment from './Comment';
import '../styles/post.css';
import NewPostModal from './NewPostModal';

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

    const {
      data,
      deletePost,
      createPost
    } = this.props;  

    return (
      <div className="container">
        <NewPostModal />        
        <header>
          <h1>Posts</h1>
          <div
            className="newPost"
            onClick={() => createPost()}
          >
            <i className="fa fa-envelope-o" aria-hidden="true">
            </i>new post
          </div>
        </header>
        { Object.keys(data).map(post => {
          return (
            <div
              key={`post-${data[post].date}`}
              className="post"
            >
              <div className="post-container">
                <div className="date">
                  <div>
                    <div className="date-day">
                      {convertDate(data[post].date).day}. 
                    </div>
                    <div className="date-month">
                      {convertDate(data[post].date).month}              
                    </div>
                  </div>              
                </div>
                
                <div className="post-content">
                  <div className="post-body">             
                      <h3>{data[post].headline}</h3>                
                      <p className="post-text">
                        {data[post].text_content}
                      </p>                
                  </div>
                  <div className="button-container">
                      <div onClick={() => deletePost(post)}>
                        <i className="fa fa-times" aria-hidden="true"></i>
                      </div>
                      <div>  
                        <i className="fa fa-commenting" aria-hidden="true"></i>
                      </div>
                    </div>
                </div>
              </div>

              <div className="comment-container">
                  {data[post].comments.map((comment, index) => {
                    return (
                      <Comment
                        key={index}
                        comment={comment}
                      />
                    ) 
                  })
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