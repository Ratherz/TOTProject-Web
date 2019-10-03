import React from 'react'
import '../../About/css/Navbar.css'
import $ from 'jquery'

class Navbar extends React.Component{
  render(){
    return(        
    <div className="container-fluid">
    <nav class="navbar navbar-expand-sm navbar-dark bg-transparent fixed-top" id="banner">
    <img src={require('../images/logo.png')} width="60" width="60"/> &nbsp;<h1>จังหวัดราชบุรี</h1>
      <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ml-auto">
        <li class="nav-item active">
            <a class="nav-link" href="#" >หน้าหลัก <span class="sr-only">(current)</span></a>
          </li>
          
          <li class="nav-item dropdown active">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              เกี่ยวกับจังหวัด
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">

            <div class="container">
              <div class="row">
                <div class="col col-xs-6 col-md-3">
                  <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">ประวัติจังหวัด</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#">ประวัติอำเภอ</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#">คำขวัญ </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#">ธงประจำจังหวัด </a>
                  </li>
                </ul>
                </div>
     
                
                <div class="col col-xs-6 col-md-3">
                  <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">ต้นไม้มงคล </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#">ดอกไม้ประจำจังหวัด </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#">แผนที่จังหวัด</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#">อำนาจหน้าที่จังหวัด</a>
                  </li>
                  
                </ul>
                </div> 
                <div class="col col-sm-6 col-md-3">
                  <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">ระบบจัดการข้อมูล</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#">ระบบสารสนเทศ</a>
                  </li> 
                  <li class="nav-item">
                    <a class="nav-link active" href="#">ทำเนียบผู้ว่า</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="#">ราชบุรีกับสงครามโลกครั้งที่ 1 </a>
                  </li>
                </ul>
                </div>  
                  <div class="col col-xs-6 col-md-3">
                  <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">ราชบุรีกับสงครามโลกครั้งที่ 2 </a>
                  </li>
                </ul>
                </div>    
              </div>
            </div>
            </div>
            {/* Dropdown-Menu */}
          </li>
          <li class="nav-item dropdown active">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              การบริการ
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">

<div class="container">
  <div class="row">
    <div class="col col-xs-6 col-md-3">
      <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">ข้อมูลที่เที่ยว</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">ข้อมูลที่กิน</a>
      </li>
    </ul>
    </div>

    
    <div class="col col-xs-6 col-md-3">
      <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">ของฝาก </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">ปฏิทินท่องเที่ยว </a>
      </li>
    </ul>
    </div>    
    <div class="col col-xs-6 col-md-3">
      <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">จองโรงแรม</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">การจองที่พัก</a>
      </li>
    </ul>
    </div>  
    <div class="col col-xs-6 col-md-3">
      <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">ข้อมูลที่พัก </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">ประเพณี/วัฒนธรรม/เทศกาล  </a>
      </li>
    </ul>
    </div>
  </div>
</div>
</div>
          </li>
          <li class="nav-item dropdown active">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              ข่าวสาร/กิจกรรม
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">

<div class="container">
  <div class="row">
    <div class="col col-xs-6 col-md-3">
      <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">ข่าวประจำจังหวัด</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">ข่าวประกวดราคา</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">ข่าวบริการ </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">ข่าวฝึกอบรม </a>
      </li>
    </ul>
    </div>

    
    <div class="col col-xs-6 col-md-3">
      <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">ข่าวรับสมัครงาน </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">ข่าวจาก Facebook  </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">ปฏิทินกิจกรรมจังหวัด</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">ปฏิทินงานผู้บริหาร</a>
      </li>
      
    </ul>
    </div> 
    <div class="col col-sm-6 col-md-3">
      <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">ภาพกิจกรรม</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">ภาพกิจกรรมจาก Facebook </a>
      </li> 
      <li class="nav-item">
        <a class="nav-link active" href="#">กิจกรรมผู้ว่าราชการจังหวัด </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">วิดีโอจังหวัด </a>
      </li>
    </ul>
    </div>  
      <div class="col col-xs-6 col-md-3">
      <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">วิดีโอจาก Facebook  </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">ผลงานของจังหวัด   </a>
      </li>
    </ul>
    </div>    
  </div>
</div>
</div>
          </li>
          <li class="nav-item dropdown active">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              เอกสาร/รายงาน
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">

<div class="container">
  <div class="row">
    <div class="col col-xs-6 col-md-3">
      <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">ผลการดำเนินงาน</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">งบประมาณจังหวัด </a>
      </li>
    </ul>
    </div>

    
    <div class="col col-xs-6 col-md-3">
      <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">ข้อมูลสถิติ  </a>
      </li>
    </ul>
    </div> 
    <div class="col col-sm-6 col-md-3">
      <ul class="nav flex-column">
     
      <li class="nav-item">
        <a class="nav-link active" href="#">โครงการพระราชดำริ </a>
      </li>
    </ul>
    </div>  
      <div class="col col-xs-6 col-md-3">
      <ul class="nav flex-column">

      <li class="nav-item">
        <a class="nav-link active" href="#">โครงการเกษตร </a>
      </li>
    </ul>
    </div>    
  </div>
</div>
</div>
          </li>
          <li class="nav-item dropdown active">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                ติดต่อจังหวัด
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">

<div class="container">
  <div class="row">
    <div class="col col-xs-6 col-md-3">
      <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">ติดต่อจังหวัด</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">แผนที่สำนักงานจังหวัด</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">แจ้งเรื่องร้องเรียน/ร้องทุกข์  </a>
      </li>
    </ul>
    </div>

    
    <div class="col col-xs-6 col-md-3">
      <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">หมายเลขโทรศัพท์ฉุกเฉิน  </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">หมายเลขโทรศัพท์ภายในสำนักงาน </a>
      </li>
    
    </ul>
    </div> 
    <div class="col col-sm-6 col-md-3">
      <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">หมายเลขโทรศัพท์ส่วนราชการ</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">สายด่วนความมั่นคง กอ.รมน.จว. </a>
      </li> 
    </ul>
    </div>  
      <div class="col col-xs-6 col-md-3">
      <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link active" href="#">ถามตอบ Q&A </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">ติดต่อผู้ว่า</a>
      </li>
    </ul>
    </div>    
  </div>
</div>
</div>
          </li>
          
        </ul>
      </div>
    </nav>
 </div>);
  }
}
















$(document).on("scroll", function(){
  if
  ($(document).scrollTop() > 100){
    $("#banner").removeClass("bg-transparent");
    $("#banner").addClass("bg-light");
  }
  else
  {
    $("#banner").addClass("fixed-top");
    $("#banner").addClass("bg-transparent");
    $("#banner").removeClass("bg-light");
  }
});
export default Navbar;
