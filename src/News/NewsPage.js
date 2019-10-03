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
import '../template/Template.css'
import Picture from '../asset/images/nws.jpg'
import { CardNews } from './component/CardNews'
console.log(Picture);
export default function NewsPage(){
    return(     
        <div className="container-fluid">
            <div className="header">
                <div className="centeres">
                   ที่นี่ ราชบุรี
                </div>
            </div>
            <div className="content-100">
                <div className ="container">
                    <div className="row">
                        <div className="col-sm-2"/>
                        <div className="col-sm-8">
                        <div className="row">
                            <div className="col-sm-12 title">
                                ข่าวประจำจังหวัด
                            </div>
                            <CardNews/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}