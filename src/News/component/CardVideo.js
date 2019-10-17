import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../css/CardVideo.css';


export class CardVideo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false
        };
    
        this.toggle = this.toggle.bind(this);
      }
    
      toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
      }
    
      render() {
    return (
        
            <div className="card-deck">
                <div class="card" onClick={this.toggle}>
                        <img className="Video" src={require('../PicNews/1.jpg')} />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                                    <ModalBody>
                                    <div class="embed-responsive embed-responsive-16by9">
                                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/URxi0wtZhbY" allowfullscreen></iframe>
                                    </div>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                    </ModalFooter>
                                    </Modal>
                            </div>
                        </div>
                    <div class="card" onClick={this.toggle} >
                        <img className="Video" src={require('../PicNews/2.jpg')} />
                            <div class="card-body">
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                
                        </div>
                    </div>
                    <div class="card" onClick={this.toggle} >
                        <img className="Video" src={require('../PicNews/2.jpg')} />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    <div class="card" onClick={this.toggle} >
                        <img className="Video" src={require('../PicNews/2.jpg')} />
                        <div class="card-body">
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                    
            </div>
       
    );
  }
}

