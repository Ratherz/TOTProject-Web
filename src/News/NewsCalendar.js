import React from 'react'
import '../asset/css/Template.css'
import { Calendar } from './component/Calendar'

export default function NewsCalendar() {
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
                                ปฏิทินกิจกรรมจังหวัด
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <Calendar/>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                    <div className="New-content">
                        <div className="Head-row row">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}