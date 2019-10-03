import React from 'react'
import './Service.css'
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
            <div className="content-auto sub">
        
                <div className="row">
                    <div className ="container">
                        <div className="col-sm-4"/>
                        <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-12 title">
                               ตลาดน้ำดำเนินสะดวก
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-1 " />
                    <div className="col-sm-5 mt-4 " align = "justify">
                    &nbsp;&nbsp;
                     <br></br><h3>คลองดำเนินสะดวก</h3> เป็นนามพระราชทานจากรัชกาลที่ 5 เป็นคลองที่ขุดด้วยแรงงานคนซึ่งขุดได้ตรงและยาวที่สุดในประเทศ จากพระราชดำริของรัชกาลที่ 4 ที่ทรงพระประสงค์ให้ขุดคลองเชื่อมต่อระหว่างแม่น้ำแม่กลองและแม่น้ำท่าจีน เพื่อประโยชน์ในการคมนาคมและการค้าขาย คลองดำเนินสะดวก ใช้เวลาในการขุด 2ปีเศษ จากปลายรัชสมัยรัชกาลที่ 4 แล้วเสร็จต้นรัชกาลที่ 5 มีความยาวประมาณ 32 กิโลเมตรมีซอยน้อยแยกออกไปอีกประมาณ 200 คลอง ตลาดน้ำดำเนินสะดวก หรือที่ชาวบ้านเรียกว่าตลาดน้ำคลองต้นเข็ม สักประมาณ 30 ปีที่แล้ว ตลาดน้ำดำเนินสะดวกอยู่ที่คลองลัดพลี หนาแน่นช่วงปากคลองต่อกับคลองดำเนินสะดวก ซึ่งอยู่ตรงข้ามตลาดน้ำปัจจุบัน(ฝั่งตรงตลาดน้ำดำเนินสะดวก) มีเรือพายแท้ ๆ จากชาวสวนแน่นขนด สามารถเดินข้ามคลองได้โดยเหยียบไปบนเรือเหล่านั้น ปี 2514-2516 ตลาดน้ำคลองลัดพลีเป็นช่วงที่มีความเจริญมาก มีการค้าขายกับอย่างสนุกสนาน โดยมีนักท่องเที่ยวแต่ชาวต่างชาติ จนมีนายทุนได้ทำการขุดคลองเทียมขึ้นมา ระหว่างคลองลัดพลี และคลองดำเนินสะดวก หวังที่จะทำเป็นแหล่งท่องเที่ยวแต่ไม่ประสบความสำเร็จ ตั้งแต่ลาดน้ำที่แท้จริงหายไป (20กว่าปีมาแล้ว) ซึ่งตลาดน้ำในปัจจุบันนี้ เป็นเพียงการสตาฟตลาดน้ำในอดีตให้คงอยู่เท่านั้น อย่างไรก็ตามตลาดน้ำดำเนินที่เก่าแก่กว่าร้อยปี
                     ยังคงมีมนต์ขลังเป็นตลาดน้ำที่ยังคงเป็นของจริง ยังมีจากแม่ค้าที่นำผลไม้จากสวนมาขาย หรือบางครั้งอาจรับผลไม้มาจากรถบรรทุกที่อื่นขาย เป็นอะไรสุดท้ายที่ควรไปชม
                    </div>
                    <div className="col-sm-5 mt-4 ">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={require('../asset/imagesService/taradnam1.png')} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require('../asset/imagesService/taradnam2.png')} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require('../asset/imagesService/taradnam4.jpg')} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
                    </div>
                    <div className="col-sm-1" />
                </div>
                <div className="row">
                    <div className="col-sm-1" />
                    <div className="col-sm-5 mt-4 ">
                    <div class="mapouter"><div class="gmap_canvas">
                      <iframe width="576" height="323" id="gmap_canvas" src="https://maps.google.com/maps?q=%E0%B8%95%E0%B8%A5%E0%B8%B2%E0%B8%94%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%94%E0%B8%B3%E0%B9%80%E0%B8%99%E0%B8%B4%E0%B8%99%E0%B8%AA%E0%B8%B0%E0%B8%94%E0%B8%A7%E0%B8%81&t=k&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"/>
                    </div>
                    </div> 
                    </div>
                    <div className="col-sm-5 mt-4 " align = "justify">
                    &nbsp;&nbsp;
                    <h3>บริการเสริมการท่องเที่ยว</h3>
                   
                    ตลาดน้ำดำเนินสะดวก ยังมีบริการเรือเช่านำเที่ยว เรือพาย ราคา 300 บาท เรือหางยาว ราคา 600 บาท นั่งได้ประมาณ 8 คน พาไปดูสวน การทำน้ำตาลสด ใช้เวลาประมาณ 45 นาที สามารถสอบถามเพิ่มเติมได้ที่ ศูนย์ประชาสัมพันธ์การท่องเที่ยวอำเภอดำเนินสะดวก ห่างจากตลาดน้ำดำเนินสะดวกออกมาประมาณ 1 กิโลเมตร มีการบริการนั่งช้าง ชมตลาดน้ำดำเนินสะดวก มีสถานีตำรวจค่อยให้บริการนักท่องเที่ยวชาวต่างชาติทางด้านภาษาและค่อยตรวจสอบทางด้านราคาสินค้าให้แก่นักท่องเที่ยว ทางด้านอาหาร มีเรือบริการพายมาขายตามข้างทาง ทางด้านการเงิน มีธนาคาร กรุงไทย และ ธนาคารอยุธยา บริการทางด้านการเงินสำหรับการแลกเปลี่ยนเงินตราและการตรวจสอบอัตราการแลกเปลี่ยน
                    </div>
                    <div className="col-sm-5 mt-4"/>
                    <div className="col-sm-1 " />
                </div>
            </div>
 
        </div>
    );
}