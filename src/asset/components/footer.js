import React from 'react'
import '../../About/css/mix.css'
import App from '../../App'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";

export default function Footer(){
    return( 
    <div className="footer">
        <div className = "container-fluid">
            <div className="row">
            <div className="col-sm-4">
            <div className="row">
             <div className="col-sm-3">
                 <center><img className="m-10" src={require('../images/logo.png')} width="80" height="80"/></center>
            </div>
            <div className="col-sm-7 p-10 m-10"><center>จังหวัดราชบุรี<br/>สำนักงานจังหวัดราชบุรี จังหวัดราชบุรี 70000</center></div> 
            </div>
            </div>
            <div className="col-sm-4">
                <div className="row">
                    <div className="col-sm-12 mt-1 p-10"><center><h3>ยินดีต้อนรับสู่ราชบุรี</h3> <FaFacebookSquare size="30px"/><FaLine size="30px"/>
                    <FaFacebookMessenger size="30px"/></center></div>
                   
                </div>
            </div>
            <div className="col-sm-4">
                <div className="row">
                    <div className="col-sm-12 ">
                        <div className="a-center p-10 m-10"><center>
                        <h5>Tel: 092-223-3322</h5>
                        </center></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>);
}