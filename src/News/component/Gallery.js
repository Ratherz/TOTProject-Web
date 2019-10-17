import React from 'react';
import '../css/News.css'

export class Gallery extends React.Component {
    render(){
        return(
            <div className="card-deck">
                <div className="card-activities">
                    <img src={require('../PicNews/At1.jpg')} alt="" className="gallery-pic gallery-pic-filter"/>
                    <div className="At-Title">
                        <center>
                            <p className="headline mt-4">
                                กิจกรรมราชบุรี จิตอาาสา
                            </p>
                        </center>
                    </div>
                </div>
                <div className="card-activities">
                    <img src={require('../PicNews/At2.jpg')} alt="" className="gallery-pic"/>
                    <div className="At-Title">
                        <center>
                            <p className="headline mt-4">
                                กิจกรรมราชบุรี จิตอาาสา
                            </p>
                        </center>
                    </div>
                </div>
                <div className="card-activities">
                    <img src={require('../PicNews/At3.JPG')} alt="" className="gallery-pic"/>
                    <div className="At-Title">
                        <center>
                            <p className="headline mt-4">
                                กิจกรรมราชบุรี จิตอาาสา
                            </p>
                        </center>
                    </div>
                </div>
                <div className="card-activities">
                    <img src={require('../PicNews/At4.jpeg')} alt="" className="gallery-pic"/>
                    <div className="At-Title">
                        <center>
                            <p className="headline mt-4">
                                กิจกรรมราชบุรี จิตอาาสา
                            </p>
                        </center>
                    </div>
                </div>
                <div className="card-activities">
                    <img src={require('../PicNews/At5.jpg')} alt="" className="gallery-pic"/>
                    <div className="At-Title">
                        <center>
                            <p className="headline mt-4">
                                กิจกรรมราชบุรี จิตอาาสา
                            </p>
                        </center>
                    </div>
                </div>
                <div className="card-activities">
                    <img src={require('../PicNews/At1.jpg')} alt="" className="gallery-pic"/>
                    <div className="At-Title">
                        <center>
                            <p className="headline mt-4">
                                กิจกรรมราชบุรี จิตอาาสา
                            </p>
                        </center>
                    </div>
                </div>
            </div>
        );
    }
}