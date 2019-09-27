import React from 'react';
import '../css/News.css';

export class CardNews extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="card-deck">
                <div className="Card">
                    <img src={require('../PicNews/1.jpg')} alt="New1" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="Card">
                    <img src={require('../PicNews/2.jpg')} alt="New1" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className="Card">
                    <img src={require('../PicNews/3.jpg')} alt="New1" />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
