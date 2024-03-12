import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
import ImageCreate from "./screens/ImageCreate.jsx";
import ImageEdit from "./screens/ImageEdit.jsx";
import Image from "./screens/Image.jsx";
import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getImages } from "./services/pics.js";
import './App.css';


function App() {
  // store images in useState array
  const [images, setImages] = useState([]);
  const [imgIndex, setImgIndex] = useState(0)

  // fetch all the images
  async function fetchImages() {
    const allImages = await getImages() 
    setImages(allImages)
  };
  
  useEffect(() => {
    fetchImages()
  }, [])

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={ <Home images={images}/> }/>
        <Route path="/image/:id" element={ <Image images={images} imgIndex={imgIndex} setImgIndex={setImgIndex} /> }/>
        <Route path="/add-image" element={ <ImageCreate /> }/>
        <Route path="/edit-image/:id" element={ <ImageEdit /> }/>
      </Routes>
    </div>
  );
}

export default App;
