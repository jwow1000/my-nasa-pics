import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
import ImageCreate from "./screens/ImageCreate.jsx";
import ImageEdit from "./screens/ImageEdit.jsx";
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
        <Route path="/add-image" element={ <ImageCreate /> }/>
        <Route path="/edit-image/:id" element={ <ImageEdit /> }/>
      </Routes>
    </div>
  );
}

export default App;
