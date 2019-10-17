import React from 'react';
import { Gallery } from './component/Gallery'

export default function NewsGallery(){
    return(
        <div className="container-fluid">
        <div className="header">
            <div className="centeres">
               ที่นี่ ราชบุรี
            </div>
        </div>
        <div className="content-template sub">
            <div className ="container">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                    <div className="row">
                        <div className="col-sm-12 title">
                            ภาพกิจกรรม
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2"/>
                    <div className="col-sm">
                        <Gallery/>
                    </div>
                    <div className="col-sm-2"/>
                </div>
            </div>
        </div>
    </div>
    );
}