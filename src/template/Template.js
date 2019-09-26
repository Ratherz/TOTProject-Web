import React from 'react'
import './Template.css'
import Picture from '../asset/images/nws.jpg'
console.log(Picture);
export default function Template(){
    return(     
        <div className="container-fluid">
            <div className="header">

            </div>
            <div className="content-100">
                <div className ="container">
                    <div className="row">
                        <div className="col-sm-4"/>
                        <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-12 title">
                            สมมติว่ามีหัวข้อ
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-sm-6">
                            เพลงประจำจังหวัดกาญจนบุรี เพลง “กาญจนบุรีศรีสยาม” กาญจนบุรีดินแดนที่สุขสันต์อาจินต์ แดนอุดมด้วยทรัพย์สิน  ผืนแผ่นดินทองของชาติไทย ดินแดนสวยประหลาด ธรรมชาติเลอล้ำถิ่นใด  เพลินถ้ำธารน้อยใหญ่ เพลินใจเมื่อยามได้ชม  ตื่นตา ครั้นมาน้ำตกพริ้วตกรื่นรมย์เสียงคลื่นครั่นโครมพลิ้วพรมอยู่ชั่วกาล  ไทรโยคทั้งใหญ่น้อยสวยหยดย้อยและดูตระการ  สวยเอราวัณเหมือนถิ่นวิมานตราตรึง ถ้ำละว้าแลลาน  วังตะเคียนชวนฝันรำพึงงามสุดงามถ้ำดาวดึงส์สวยติดตรึงงามซึ้งไม่วาย  มีหินย้อยน่ายลสวยพราวหยดหยาดเพชรเพริดพราย  ชวนให้ชมมิหน่ายดังประกายน้ำค้างน่าชม  เปรียบดังทิพย์แดนพิมานสวรรค์สร้างชั้
                            </div>
                            <div className="col-sm-6">
                                <center><img src={require('../asset/images/nws.jpg')} height='170' width='270'/></center>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">

            </div>
        </div>
    );
}