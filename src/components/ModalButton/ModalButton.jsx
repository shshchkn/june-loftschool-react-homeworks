import React, { Component } from 'react';
import './ModalButton.css';
import Modal from './Modal';

class ModalButton extends Component {
  
  state = {
    isModalShow: false
  }

  hideModal = () => {
    this.setState({
      isModalShow: false
    })
  }

  showModal = () => {
    this.setState({
      isModalShow: true
    })
  }
  
  render() {
    return (
      <div>
        <button onClick={this.showModal}>Show modal!</button>
        {
          this.state.isModalShow ? 
          <Modal>
            <div className="modal">
              <div className="modal__fog">
                <div className="modal__body">
                  <h1>Модальное окно</h1>
                  <button onClick={this.hideModal}>Close</button>
                </div>
              </div>
            </div>
          </Modal> : null
        }
      </div>
    )
  }
}

export default ModalButton;