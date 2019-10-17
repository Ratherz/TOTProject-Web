import React from 'react';
import '../css/News.css';


export class Navsidebar extends React.Component{
    render(
        
    ){
        return(
            
            // <div className="Sidetab">
            //     <h3 className="TextMenu">Menu</h3>
            //         <ul className="SizeMenu">
            //             <li className="light">
            //                 <a href="#" className="item-button nav-link">ข่าวประจำจังหวัด</a>
            //             </li>
            //             <li className="light">
            //                 <a href="#" className="item-button nav-link">ข่าวประกวดราคา</a>
            //             </li>
            //             <li className="light">
            //                 <a href="#" className="item-button nav-link">ข่าวบริการ</a>
            //             </li>
            //             <li className="light">
            //                 <a href="#" className="item-button nav-link">ข่าวฝึกอบรม</a>
            //             </li>
            //             <li className="light">
            //                 <a href="#" className="item-button nav-link">ข่าวรับสมัครงาน</a>
            //             </li>
            //             <li className="light">
            //                 <a href="#" className="item-button nav-link">ข่าวจาก Facebook </a>
            //             </li>
            //         </ul>
            // </div>   
            <div>
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
            <span onclick="openNav()">&#9776; open</span>
            </div>
           
        
        );
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
