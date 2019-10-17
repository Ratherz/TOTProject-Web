import React from 'react';
 
export class Success extends React.Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="Struct card">
                    <img src={require('../PicNews/Ch1.jpg')} alt="" className="success-pic"/>
                    <center>
                        <p>หนังสือ ราชบุรี 1</p>
                    </center>
                </div>
                <div className="Struct card">
                    <img src={require('../PicNews/Ch2.jpg')} alt="" className="success-pic"/>
                    <center>
                        <p>หนังสือ ราชบุรี 2</p>
                    </center>
                </div>
                <div className="Struct card">
                    <img src={require('../PicNews/Ch3.jpeg')} alt="" className="success-pic"/>
                    <center>
                        <p>หนังสือ ราชบุรี 3</p>
                    </center>
                </div>
                <div className="Struct card">
                    <img src={require('../PicNews/Ch1.jpg')} alt="" className="success-pic"/>
                    <center>
                        <p>หนังสือ ราชบุรี 1</p>
                    </center>
                </div>
            </div>
        );
    }
}