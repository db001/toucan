import React, { Component } from 'react';
import Post from './components/Post';

/* Sample data */
const sampleData = {
  posts: [
    {
      date: '2017-10-13T21:55:25.725Z',
      headline: 'Post Headline 1',
      text_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: [
        'Comment comment comment 1',
        'Really long but pointless comment to take up space',
        'Agreed'        
      ]
    },
    {
      date: '2017-10-09T06:23:47.725Z',
      headline: 'Post Headline 2',
      text_content: 'Lorem Ipsum Sequel: The revenge.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      comments: [
        'Preferred the original',
        'Is this a trilogy?',       
      ]
    },
    {
      date: '2017-04-01T12:23:47.725Z',
      headline: 'No Comment',
      text_content: 'Dull dull dull...',
      comments: []
    },
    {
      date: '2016-05-04T12:01:59.001Z',
      headline: 'Post Headline Number 4',
      text_content: 'I\'m only here to check that the alternating colour CSS rules are working...',
      comments: [
        'Doing a great job bro!',       
      ]
    },
  ]
};

class App extends Component {

  constructor(props) {
    super();

    this.state = sampleData;
  }

  render() {

    const data = this.state;

    return (
      <div>
        <Post 
          data={data}
        />
      </div>      
    );
  }
}

export default App;