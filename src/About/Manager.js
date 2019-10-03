import React from 'react'
import '../About/css/mix.css'

export default function Manager(){
    return(  
        
        <div className="container-fluid">
            <div className="header">
                <div className="centeres">
                   ที่นี่ ราชบุรี
                </div>
            </div>
            <div className="content-auto sub">
        
                <div className="row">   
                    <div className ="container">
                        <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-12 title-History">
                                คณะผู้บริหาร
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                        <div className="col-sm-2" />
                        <div className="col-sm-8">
                            <div className="bg-Manager1">
                                <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-3 img-Manager">
                                        <center><img src = {require('../asset/images/Manager/1058.jpg')} width="150px" height="200ex"/></center>
                                    </div>
                                    <div className="col-sm-6 text-Manager">
                                        ชื่อ: นายชยาวุธ จันทร<br />
                                        ตำแหน่ง: ผู้ว่าราชการจังหวัดราชบุรี<br />
                                        ดำรงตำแหน่ง: เมื่อวันที่ 1 ตุลาคม 2560<br />
                                        โทรศัพท์: <br />
                                        สถานที่ทำงาน: <br />
                                        <a href="/Manager1"><button class=" button-Manager button-Manager1" >เพิ่มเติม</button></a> 
                                    </div> 
                                </div>    
                            </div>
                            <div className="bg-Manager2">
                            <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-3 img-Manager">
                                        <center><img src = {require('../asset/images/Manager/1059.jpg')} width="150px" height="200ex"/></center>
                                    </div>
                                    <div className="col-sm-6 text-Manager">
                                        ชื่อ: นายวีรัส ประเศรษโฐ<br />
                                        ตำแหน่ง: รองผู้ว่าราชการจังหวัดราชบุรี<br />
                                        ดำรงตำแหน่ง: เมื่อวันที่ 21 พฤศจิกายน 2559<br />
                                        โทรศัพท์: <br />
                                        สถานที่ทำงาน: <br />
                                        <button class=" button-Manager button-Manager1">เพิ่มเติม</button>
                                    </div> 
                                </div>   
                            </div>
                            <div className="bg-Manager3">
                            <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-3 img-Manager">
                                        <center><img src = {require('../asset/images/Manager/1060.jpg')} width="150px" height="200ex"/></center>
                                    </div>
                                    <div className="col-sm-6 text-Manager">
                                        ชื่อ: นายชยาวุธ จันทร<br />
                                        ตำแหน่ง: รองผู้ว่าราชการจังหวัดราชบุรี<br />
                                        ดำรงตำแหน่ง: เมื่อวันที่ 1 ตุลาคม 2560<br />
                                        โทรศัพท์: <br />
                                        สถานที่ทำงาน: <br />
                                        <button class=" button-Manager button-Manager1">เพิ่มเติม</button>
                                    </div> 
                                </div>   
                            </div>
                            <div className="bg-Manager4">
                            <div className="row">
                                    <div className="col-sm-1" />
                                    <div className="col-sm-3 img-Manager">
                                        <center><img src = {require('../asset/images/Manager/1061.jpg')} width="150px" height="200ex"/></center>
                                    </div>
                                    <div className="col-sm-6 text-Manager">
                                        ชื่อ: นายชยาวุธ จันทร<br />
                                        ตำแหน่ง: รองผู้ว่าราชการจังหวัดราชบุรี<br />
                                        ดำรงตำแหน่ง: เมื่อวันที่ 8 ตุลาคม 2561<br />
                                        โทรศัพท์: <br />
                                        สถานที่ทำงาน: <br />
                                        <button class=" button-Manager button-Manager1">เพิ่มเติม</button>
                                    </div> 
                                </div>   
                            </div>
                            
                         </div>
                            
                        
                    
                </div>
                
            </div>
 
        </div>

 
    );
}