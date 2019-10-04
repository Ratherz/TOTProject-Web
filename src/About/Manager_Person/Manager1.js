import React from 'react'
import '../../About/css/mix.css'

export default function Manager(){
    return(  
        
        <div className="container-fluid">
            <div className="header">
                <div className="centeres">
                   ที่นี่ ราชบุรี
                </div>
            </div>
            <div className="content-mix sub">
        
                <div className="row">   
                    <div className ="container">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-12 title-History">
                                    คณะผู้บริหาร
                                </div>
                                
                            </div>
                            <div className="row">
                    <div className="col-sm-1" />
                    <div className="col-sm-3">
                        <center><img src = {require('../../asset/images/Manager/1058.jpg')} width="150px" height="200ex"/></center>
                    </div>
                   <div className="col-sm-5 text-Manager">
                       <div className="row border-Manager">
                           ผู้ว่าราชการจังหวัดราชบุรี <br />
                            ดำรงตำแหน่งเมื่อวันที่ 1 ตุลาคม 2560
                       </div>
                        
                   </div>
                    
                </div>
                        </div>
                    </div>
                </div>


               
            </div>
                
        </div>


 
    );
}