import React, { Component } from 'react';
import '../styles/newPostModal.css';

class NewPostModal extends Component {
  render() {
    return (
      <div className="backdrop">
        <div className="modal">
          {/* {this.props.children} */}
          Hello world!

          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPostModal;