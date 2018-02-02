import React, { Component } from 'react';
import Post from './components/Post';
import NewPostModal from './components/NewPostModal';

/* Sample data */
const sampleData = {
  post1: {
    date: '2017-10-13T21:55:25.725Z',
    headline: 'Post Headline 1',
    text_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    comments: [
      'Comment comment comment 1',
      'Really long but pointless comment to take up space',
      'Agreed'        
    ]
  },
  post2: {
    date: '2017-10-09T06:23:47.725Z',
    headline: 'Post Headline 2',
    text_content: 'Lorem Ipsum Sequel: The revenge.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    comments: [
      'Preferred the original',
      'Is this a trilogy?',       
    ]
  },
  post3: {
    date: '2017-04-01T12:23:47.725Z',
    headline: 'No Comment',
    text_content: 'Dull dull dull...',
    comments: []
  },
  post4: {
    date: '2016-05-04T12:01:59.001Z',
    headline: 'Post Headline Number 4',
    text_content: 'I\'m only here to check that the alternating colour scheme is working...',
    comments: [
        'Doing a great job bro!',       
    ]
  }
};

const checkForComments = post => {
  if(post.comments.length > 0) {
    return window.confirm("Are you sure you wish to delete this post and comments?");
  }
  else {
    return true;
  }
}

class App extends Component {

  constructor(props) {
    super();

    this.state = {
      sampleData,
      newPostModelOpen: false
    }
  }

  toggleNewPostModal = () => {
    this.setState({
      newPostModalOpen: !this.state.newPostModalOpen
    })
  }

  openNewPostModal = () => {
    this.setState({
      newPostModalOpen: true
    })
    console.log(this.state.newPostModelOpen);
  }

  deletePost = id => {
    const posts = this.state.sampleData;
    // If there are comments and user has okayed the confirm, delete post
    if(checkForComments(posts[id])) {
      delete posts[id];
      this.setState({ 
        sampleData: posts })
    // Else return out of function without updating state
    } else {
      return;
    }    
  }

  addNewPost = (post) => {
    const posts = this.state.sampleData;
    const timestamp = Date.now();
    posts[`post${timestamp}`] = post;
    this.setState({
      ...sampleData,
      post
    })
  }

  render() {

    return (      
      <div>
        <header>
            <h1>Posts</h1>
            <div
              className="newPost"
              // onClick={this.openNewPostModal()}
            >
              <i className="fa fa-envelope-o" aria-hidden="true">
              </i>new post
            </div>
          </header>
        <NewPostModal 
          addNewPost={this.addNewPost}
          show={this.state.newPostModelOpen}
          onClose={this.toggleNewPostModal}
        />  
        <Post 
          data={this.state.sampleData}
          deletePost={this.deletePost}
          addNewPost={this.addNewPost}
          openNewPostModal={this.openNewPostModal}
        />
         
      </div>      
    );
  }
}

export default App;