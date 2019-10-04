// import React from 'react';
// import '../News/css/News.css';

// export default function NewsPage(){
//     return(
//         <div className="container-fluid m-0 background" >
//             <div className="row ">
//                 <div className="col-12 col-sm-12 square">
                   
//                 </div>

//             </div>
//         </div>
//     );
// }



import React from 'react'
import '../asset/css/Template.css'
import Picture from '../asset/images/nws.jpg'
import { CardNews } from './component/CardNews'
import { Navsidebar } from './component/Navsidebar'
import { Pagination } from './component/Pagination'

console.log(Picture);
export default function NewsPage(){
    return(     
        <div className="container-fluid">
            <div className="header">
                <div className="centeres">
                   ที่นี่ ราชบุรี
                </div>
            </div>
            <div className="content-template sub">
                <div className ="container">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-12 title">
                                ข่าวประจำจังหวัด
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="New-content">
                        <div className="Head-row row">
                            <div className="Navsidebar col-sm-2 col-lg-2">
                                <Navsidebar/>
                            </div>
                            <div className="colcontent col-sm-10 col-lg-10">
                               <center>
                                    <CardNews/>
                               </center>
                            </div>
                                <Pagination/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}