import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
import ImageCreate from "./screens/ImageCreate.jsx";
import Image from "./screens/Image.jsx";

import {Routes, Route} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/image/:id" element={ <Image /> }/>
        <Route path="/add-images" element={ <ImageCreate /> }/>

        
      </Routes>

     
    </div>
  );
}

export default App;
