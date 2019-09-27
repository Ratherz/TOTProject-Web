import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import Navbar from './asset/components/Navbar'
import Template from './template/Template'
import Footer from './asset/components/footer'
function App() {
  return (
    <div>
      <Navbar/>
    <Template/>
    <Footer/>
    </div>
  );
}

export default App;
