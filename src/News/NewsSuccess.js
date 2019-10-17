import React from 'react';
import { Success } from './component/Success'

export default function NewsSuccess() {
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
                            ผลงานของจังหวัด
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <center>
                    <Success/>
                </center>
            </div>
        </div>
    </div>
    );
}