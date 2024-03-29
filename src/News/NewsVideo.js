import React from 'react';
import '../asset/css/Template.css';
import { CardVideo } from './component/CardVideo'
import { Navsidebar } from './component/Navsidebar'
import { Popup } from './component/Popup'

export default function NewsVideo(){
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
                                วีดิโอประจำจังหวัด 
                            </div>
                            </div>
                        </div>
                    </div>
                            <CardVideo/>          
                </div>
                <div className="container-fluid">
                    <div className="New-content">
                        <div className="Head-row row">
                            {/* <div className="Navsidebar col-sm-2 col-lg-2">
                                <Navsidebar/>
                            </div> */}
                            {/* <div className="colcontent col-sm-10 col-lg-10">
                               <center>
                                    <CardNews/>
                               </center>
                                    
                            </div> */}
                                {/* <Pagination/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}