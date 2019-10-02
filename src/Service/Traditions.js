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
            <div className="content-auto  sub">
        
                <div className="row">
                    <div className ="container">
                        <div className="col-sm-4"/>
                        <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-12 title">        
                            ประเพณี / วัฒนธรรม / เทศกาล
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-1 " />
                    <div className="col-sm-10 mt-4  py-5" align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons ">
                  <div class="module-buttons-item  buttons-horizontal mt-4">
		    			       <a  class="ui builder_button blue">
		    		    		  <center>
                      <button type="button"  class="btn btn-lg btn-primary" disabled>อำเภอสวนผึ้ง</button>
                      </center>	
		    		    			</a>
		                    </div>
                    </div>
                      <div className="row mt-4">
                      <div class="card-group">
  <div class="card">
    
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    
    <div class="card-body">
      <h5 class="card-title">เขากระโจม (อ.สวนผึ้ง)</h5>
      <p class="card-text">เขากระโจม จากระดับความสูง 1,045 เมตรจากระดับน้ำทะเล ตั้งอยู่ในแนวสุดเขตประเทศไทย ภาคตะวันตก เขากระโจมจึงกลายเป็นจุดชมทะเลหมอกที่ กำลังนิยมมาก เพราะใกล้กรุงเทพฯ สิ่งที่ทำให้นักท่องเที่ยวจดจำไม่รู้ลืม คือ หนทางที่สมบุกสมบันยากลำบาก จนเป็นเรื่องพูดคุยในความทรงจำตลอดไป</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">CORO Field</h5>
      <p class="card-text">ท่องเที่ยวเชิงเกษตรแบบชิลๆ ที่ Coro Field อ.สวนผึ้ง จ.ราชบุรี หาแรงบันดาลใจให้ใจสีเขียวคลีนๆ ทานเมนูอร่อยที่สร้างสรรค์พิเศษหาทานได้ยากจากผลผลิตฟาร์ม แบ่งพื้นที่เป็น 5 โซน เที่ยว กิน ช้อป ปลูก เปิด 9.00-20.00 น. ทุกวัน ไม่มีค่าเข้า โทร. 095-738-9001</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">AlpacaHill ฟาร์มอัลปาก้าแห่งแรกในประเทศไทย (อ.สวนผึ้ง)</h5>
      <p class="card-text">อัลปาก้าฮิลล์ ฟาร์มอัลปาก้าแห่งแรกและแห่งเดียวที่ใหญ่ที่สุดของไทย ยินดีต้อนรับท่านสู่ดินแดนอันสวยงาม ซึ่งเต็มไปด้วยอัลปาก้าขนปุย วิ่งเล่นอยู่ทามกลางทุ่งหญ้าสีเขียวกว่า 250 ไร่ ที่อัลปาก้าฮิลล์ ประสบการณ์ไม่รู้ลืมสำหรับทุกเพศทุกวัย ที่จะได้ใกล้ชิดกับสัตว์หายาก</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
  <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">น้ำตกผาแดง (อ.สวนผึ้ง)</h5>
      <p class="card-text">น้ำตกกลางผืนป่าสวนผึ้ง จ.ราชบุรี พิกัดอยู่ระหว่างทางขึ้นไปยังเขากระโจมทางขวามือ ก่อนถึงลำธารน้ำที่เราต้องขับรถลุยข้ามไป การเดินทางขึ้นมายังเขากระโจมต้องใช้รถขับเคลื่อนสี่ล้อ 4WD ทางขึ้นค่อนข้างสมบุกสมบัน น้ำตกผาแดงเป็นน้ำตกขนาดกลาง</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>  
                      </div>
                      
                     </div>
                    <div className="col-sm-1" />
                </div>
                <div className="row">
                    <div className="col-sm-1 " />
                    <div className="col-sm-10 mt-4  py-5" align = "justify">
                    &nbsp;&nbsp;
                    
                      <div className="row mt-4">
                      <div class="card-group">
  <div class="card">
    
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    
    <div class="card-body">
      <h5 class="card-title">พุทธสถานวิโมกสิวาลัย</h5>
      <p class="card-text">ยินดีต้อนรับสู่ พุทธสถานวิโมกสิวาลัย อ.สวนผึ้ง จ.ราชบุรี สถานที่มุ่งสู่มุมสงบ และสวยงาม คุณสามารถเข้าชมภายในกราบไหว้องค์สมเด็จพระเจ้าจักรพรรดิสมมุติราชมหามัยมุนี  ถือว่าเป็นพระพุทธรูปที่สวยและงดงามที่สุดองค์หนึ่ง ภายในร่มรื่นด้วยต้นไม้นานนาชนิด สถานที่จัดสวยงามเจริญตา เหมาะสำหรับผู้ต้องการพักผ่อน ความสงบ หรือจะมาปฏิบัติธรรม</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Veneto เวเนโต้ สวนผึ้ง</h5>
      <p class="card-text">สถานที่ท่องเที่ยว เวเนโต้ สวนผึ้ง  (Veneto SuanPhueng) เป็นแลนมาร์คแห่งการพักผ่อน ที่ผสมผสานธรรมชาติ ท่ามกลางขุนเขาและทะเลสาบขนาดกว่า 20 ไร่ พร้อมไปด้วยจุดถ่ายภาพ และกิจกรรมต่างๆมากมาย จุดประกายความโดดเด่นไม่ซ้ำใคร  เพื่อตอบโจทย์ทุกไลฟ์สไตล์อย่างลงตัว</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Dogin สวนสุนัขใหญ่</h5>
      <p class="card-text">Dogin สวนผึ้ง สวนสุนัขใหญ่ คือสถานที่ท่องเที่ยวในรูปแบบของสวนพักผ่อนหย่อนใจกับสุนัขสายพันธุ์ขนาดใหญ่จากยุโรปและเอเชียมากมายหลายสายพันธุ์กว่า 40 ตัวอาทิเช่น Newfoundland, Alaskan Malamute, Samoyed, Neapolitan Mastiff, Tibetan Mastiff และสายพันธุ์ใหญ่หายากอื่นๆอีกมากมาย เปิดวันพฤหัสบดี – อาทิตย์ และวันหยุดนักขัตฤกษ์ เวลา 10.00 – 19.00 น. โทร. 092 270 7544</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
  <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title"> น้ำตกเก้าชั้น(น้ำตกเก้าโจน) อ.สวนผึ้ง</h5>
      <p class="card-text">น้ำตกเก้าชั้น หรือ เก้าโจน (เก้ากระโจน) น้ำตกจากหน้าผาสูงกลางหุบเขาในแนวเทือกเขาตะนาวศรีซึ่งแต่เดิมเคยเป็นที่รู้จักเฉพาะกลุ่มชาวกะเหรี่ยงในพื้นที่เท่านั้น ตั้งอยู่ที่บ้านห้วยผาก ม. 7 ต.ผาผึ้ง อ.สวนผึ้ง จ.ราชบุรี ห่างจากธารน้ำร้อนบ่อคลึงไปประมาณ 1 กิโลเมตร เป็นน้ำตกขนาดกลาง แบ่งเป็น 9 ชั้น</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>  
                      </div>
                      
                     </div>
                    <div className="col-sm-1" />
                </div>
                <div className="row">
                    <div className="col-sm-1 " />
                    <div className="col-sm-10 mt-4 py-5 " align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons">
                  <div class="module-buttons-item  buttons-horizontal mt-4">
		    			       <a  class="ui builder_button blue">
		    		    		  <center>
                      <button type="button" class="btn btn-lg btn-primary" disabled>อำเภอดำเนินสะดวก</button>
                      </center>	
		    		    			</a>
		                    </div>
                    </div>
                    <div className="row mt-4">
                      <div class="card-group">
  <div class="card">
  <a href="แก้ไขตามลิ้ง">
    <img  src={require('../asset/imagesService/TravelList/taradnam.jpg')} class="card-img-top" alt="..."/>
</a>
    <div class="card-body">
      <h5 class="card-title">ตลาดน้ำดำเนินสะดวก</h5>
      <p class="card-text">ตลาดน้ำดำเนินสะดวกตั้งอยู่ในจังหวัดราชบุรีและยังเชื่อมไปถึงจังหวัดสมุทรสาครและจังหวัดสมุทรสงครามเข้าด้วยกัน<br></br>ตลาดน้ำดำเนินสะดวกจะเริ่มค้าขายกันตั้งแต่08.00-12.00น. 
      <br></br>สินค้าที่มีให้เลือกซื้อก็จะมีทั้งของกินของใช้และของที่ระลึกมากมายรวมถึงสินค้าหัตถกรรมซึ่งเป็นที่นิยมของชาวต่างชาติ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>  
                      </div>
                     </div>
                    <div className="col-sm-1" />
                </div>
                <div className="row">
                    <div className="col-sm-1 " />
                    <div className="col-sm-10 mt-4 py-5 " align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons">
                  <div class="module-buttons-item  buttons-horizontal mt-4">
		    			       <a  class="ui builder_button blue">
		    		    		  <center>
                      <button type="button" class="btn btn-lg btn-primary" disabled>อำเภอเมือง</button>
                      </center>	
		    		    			</a>
		                    </div>
                    </div>
                    <div className="row mt-4">
                      <div class="card-group">
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>  
                      </div>
                     </div>
                    <div className="col-sm-1" />
                </div>
                <div className="row">
                    <div className="col-sm-1 " />
                    <div className="col-sm-10 mt-4 py-5 " align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons">
                  <div class="module-buttons-item  buttons-horizontal mt-4">
		    			       <a  class="ui builder_button blue">
		    		    		  <center>
                      <button type="button" class="btn btn-lg btn-primary" disabled>อำเภอโพธาราม</button>
                      </center>	
		    		    			</a>
		                    </div>
                    </div>
                    <div className="row mt-4">
                      <div class="card-group">
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>  
                      </div>
                     </div>
                    <div className="col-sm-1" />
                </div>
                <div className="row">
                    <div className="col-sm-1 " />
                    <div className="col-sm-10 mt-4 py-5 " align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons">
                  <div class="module-buttons-item  buttons-horizontal mt-4">
		    			       <a  class="ui builder_button blue">
		    		    		  <center>
                      <button type="button" class="btn btn-lg btn-primary" disabled>อำเภอบางแพ</button>
                      </center>	
		    		    			</a>
		                    </div>
                    </div>
                    <div className="row mt-4">
                      <div class="card-group">
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>  
                      </div>
                     </div>
                    <div className="col-sm-1" />
                </div>
                <div className="row">
                    <div className="col-sm-1 " />
                    <div className="col-sm-10 mt-4 py-5 " align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons">
                  <div class="module-buttons-item  buttons-horizontal mt-4">
		    			       <a  class="ui builder_button blue">
		    		    		  <center>
                      <button type="button" class="btn btn-lg btn-primary" disabled>อำเภอจอมบึง</button>
                      </center>	
		    		    			</a>
		                    </div>
                    </div>
                    <div className="row mt-4">
                      <div class="card-group">
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>  
                      </div>
                     </div>
                    <div className="col-sm-1" />
                </div>
                <div className="row">
                    <div className="col-sm-1 " />
                    <div className="col-sm-10 mt-4 py-5 " align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons">
                  <div class="module-buttons-item  buttons-horizontal mt-4">
		    			       <a  class="ui builder_button blue">
		    		    		  <center>
                      <button type="button" class="btn btn-lg btn-primary" disabled>อำเภอบ้านคา</button>
                      </center>	
		    		    			</a>
		                    </div>
                    </div>
                    <div className="row mt-4">
                      <div class="card-group">
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>  
                      </div>
                     </div>
                    <div className="col-sm-1" />
                </div>
                <div className="row">
                    <div className="col-sm-1 " />
                    <div className="col-sm-10 mt-4 py-5 " align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons">
                  <div class="module-buttons-item  buttons-horizontal mt-4">
		    			       <a  class="ui builder_button blue">
		    		    		  <center>
                      <button type="button" class="btn btn-lg btn-primary" disabled>อำเภอปากท่อ</button>
                      </center>	
		    		    			</a>
		                    </div>
                    </div>
                    <div className="row mt-4">
                      <div class="card-group">
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>  
                      </div>
                     </div>
                    <div className="col-sm-1" />
                </div>
                <div className="row">
                    <div className="col-sm-1 " />
                    <div className="col-sm-10 mt-4 py-5 " align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons">
                  <div class="module-buttons-item  buttons-horizontal mt-4">
		    			       <a  class="ui builder_button blue">
		    		    		  <center>
                      <button type="button" class="btn btn-lg btn-primary" disabled>อำเภอบ้านโป่ง</button>
                      </center>	
		    		    			</a>
		                    </div>
                    </div>
                    <div className="row mt-4">
                      <div class="card-group">
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>  
                      </div>
                     </div>
                    <div className="col-sm-1" />
                </div>
                <div className="row">
                    <div className="col-sm-1 " />
                    <div className="col-sm-10 mt-4 py-5 " align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons">
                  <div class="module-buttons-item  buttons-horizontal mt-4">
		    			       <a  class="ui builder_button blue">
		    		    		  <center>
                      <button type="button" class="btn btn-lg btn-primary" disabled>อำเภอวัดเพลง</button>
                      </center>	
		    		    			</a>
		                    </div>
                    </div>
                    <div className="row mt-4 mb-4">
                      <div class="card-group">
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <a href="แก้ไขตามลิ้ง">
    <img src={require('../asset/imagesService/cm.jpg')} class="card-img-top" alt="..."/>
    </a>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">เนื้อหาสั้นๆ</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>  
                      </div>
                     </div>
                    <div className="col-sm-1" />
                </div>
                  
            </div>
 
        </div>
    );
}