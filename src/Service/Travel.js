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
                              สถานที่ท่องเที่ยว
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-1 " />
                    <div className="col-sm-10 mt-4 " align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons">
                  <div class="module-buttons-item  buttons-horizontal">
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
      <h5 class="card-title">หหหหหห</h5>
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
                    <div className="col-sm-10 mt-4 " align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons">
                  <div class="module-buttons-item  buttons-horizontal">
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
                    <div className="col-sm-10 mt-4 " align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons">
                  <div class="module-buttons-item  buttons-horizontal">
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
                    <div className="col-sm-10 mt-4 " align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons">
                  <div class="module-buttons-item  buttons-horizontal">
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
                    <div className="col-sm-10 mt-4 " align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons">
                  <div class="module-buttons-item  buttons-horizontal">
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
                    <div className="col-sm-10 mt-4 " align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons">
                  <div class="module-buttons-item  buttons-horizontal">
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
                    <div className="col-sm-10 mt-4 " align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons">
                  <div class="module-buttons-item  buttons-horizontal">
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
                    <div className="col-sm-10 mt-4 " align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons">
                  <div class="module-buttons-item  buttons-horizontal">
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
                    <div className="col-sm-10 mt-4 " align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons">
                  <div class="module-buttons-item  buttons-horizontal">
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
                    <div className="col-sm-10 mt-4 " align = "justify">
                    &nbsp;&nbsp;
                    <div class="module-buttons">
                  <div class="module-buttons-item  buttons-horizontal">
		    			       <a  class="ui builder_button blue">
		    		    		  <center>
                      <button type="button" class="btn btn-lg btn-primary" disabled>อำเภอวัดเพลง</button>
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
               
            </div>
 
        </div>
    );
}