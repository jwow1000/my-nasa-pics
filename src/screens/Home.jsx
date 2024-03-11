// pull form database
// load images
import ImagePreview from '../components/ImagePreview.jsx';
import { useState, useEffect } from 'react';
import { getImages } from "../services/pics.js";

function Home() {
  // store images in useState array
  const [images, setImages] = useState([]);

  // fetch all the images
  async function fetchImages() {
    const allImages = await getImages() 
    setImages(allImages)
  };
  
  useEffect(() => {
    fetchImages()
  }, [])

  return (
    <div>
      <h1>all the images!</h1>
        <div id='images-container-Home'>
          {
            images.map( (item, i) => (
              <ImagePreview img={item} key={i}/>
            ))
          }
        </div>
    </div>
  )
}

export default Home;