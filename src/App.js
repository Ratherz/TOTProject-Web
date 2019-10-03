import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import {BrowserRouter as Router, Route , Link} from 'react-router-dom'

import Navbar from './asset/components/Navbar'

import Footer from './asset/components/footer'
import NewsPage from './News/NewsPage'
import Manager2 from './About/Manager_Person/Manager1'


function App() {
  return (

      <div>
        <Navbar />
        <Manager2 />
        <Footer />
        {/* <Template/> */}
    
        {/* <NewsPage/> */}
      </div>

  );
}

export default App;
