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

    // If show is false, don't render the modal
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop">
        <div className="modal">
          <h2>New Post</h2>
          <form ref={(input) => this.newPostForm = input} onSubmit={(e) => this.createPost(e)}>
            <input ref={(input) => this.headline = input} type="text" placeholder="Headline" />
            <textarea ref={(input) => this.text_content = input} type="text" placeholder="Text" />
            <div className="modal-button-container">
              <button type="submit" onClick={this.props.onClose}>save</button>
              <button type="button" onClick={(e) => this.clearForm(e)}>cancel</button>
            </div>            
          </form>
        </div>
      </div>
    );
  }
}

export default NewPostModal;