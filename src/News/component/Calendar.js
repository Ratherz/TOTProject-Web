import React from 'react';
import '../css/News.css'

export class Calendar extends React.Component {
    render(){
        return(
            <from>
                <div className="form-group row">
                    <label className="Date" >วันเริ่มต้น : </label>
                    <div className="col-sm-6">
                        <input type="Date" className="form-control" id="inputDate" placeholder="01/01/2019"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="toDate">วันสิ้นสุด : </label>
                    <div className="col-sm-6">
                        <input type="Date" className="form-control" id="inputtoDate" placeholder="01/01/2019"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="search">ค้นหาคำสำคัญ : </label>
                    <input type="text" className="form-control" id="inputSearch"/>
                    <button type="submit" className="btn btn-primary mt-2">ค้นหา</button>
                    <button type="submit" className="btn btn-primary mt-2 ml-2">ดูทั้งหมด</button>
                </div>
                <div className="form-group row">
                    <h6>จำนวนทั้งหมด </h6>
                    <div class="row rectangle">
                        
                        <div className="col">
                            <p className="text-border">ช่วงกิจกรรม</p>
                        </div>
                        <div className="col">
                            <center>
                                <p className="text-border">ชื่อกิจกรรม</p>
                            </center>
                        </div>
                        {/* <center>
                            <p className="text-border">ช่วงกิจกรรม</p>
                            <p className="text-border">ชื่อกิจกรรม</p>
                        </center> */}
                    </div>
                </div>
            </from>
           );
    }
}