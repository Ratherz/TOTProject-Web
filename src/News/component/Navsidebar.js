import React from 'react';
import '../css/News.css';

export class Navsidebar extends React.Component{
    render(
    ){
        return(
            
            <div className="Sidetab">
                <h3 className="TextMenu">Menu</h3>
                    <ul className="SizeMenu">
                        <li className="light">
                            <a href="#" className="item-button nav-link">ข่าวประจำจังหวัด</a>
                        </li>
                        <li className="light">
                            <a href="#" className="item-button nav-link">ข่าวประกวดราคา</a>
                        </li>
                        <li className="light">
                            <a href="#" className="item-button nav-link">ข่าวบริการ</a>
                        </li>
                        <li className="light">
                            <a href="#" className="item-button nav-link">ข่าวฝึกอบรม</a>
                        </li>
                        <li className="light">
                            <a href="#" className="item-button nav-link">ข่าวรับสมัครงาน</a>
                        </li>
                        <li className="light">
                            <a href="#" className="item-button nav-link">ข่าวจาก Facebook </a>
                        </li>
                    </ul>
            </div>   
           
        
        );
    }
}