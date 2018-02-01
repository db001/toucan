import React, { Component } from 'react';
import '../styles/newPostModal.css';

class NewPostModal extends Component {

  createPost(event) {
    event.preventDefault();
    const newPost = {
      date: `${new Date().toISOString()}`,
      headline: this.headline.value,
      text_content: this.text_content.value,
      comments: []
    }
    this.props.addNewPost(newPost);
    this.newPostForm.reset();
  }

  clearForm(event) {
    event.preventDefault();
    this.newPostForm.reset();
  }

  render() {
    return (
      <div className="backdrop">
        <div className="modal">
          <form ref={(input) => this.newPostForm = input} onSubmit={(e) => this.createPost(e)}>
            <input ref={(input) => this.headline = input} type="text" placeholder="Headline" />
            <textarea ref={(input) => this.text_content = input} type="text" placeholder="Text" />
              <button type="submit">Save</button>
              <button type="button" onClick={(e) => this.clearForm(e)}>Cancel</button>           
          </form>
        </div>
      </div>
    );
  }
}

export default NewPostModal;