import React from 'react'
import './Template.css'
import Picture from '../asset/images/nws.jpg'
console.log(Picture);
export default function Template(){
    return(     
        <div className="container-fluid">
            <div className="header">
                <div className="centeres">
                   ที่นี่ ราชบุรี
                </div>
            </div>
            <div className="content-100">
                <div className ="container">
                    <div className="row">
                        <div className="col-sm-2"/>
                        <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-12 title">
                            สมมติว่ามีหัวข้อ
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}