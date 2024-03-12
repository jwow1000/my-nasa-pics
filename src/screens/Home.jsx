// pull form database
// load images
import ImagePreview from '../components/ImagePreview.jsx';
import { useState, useEffect } from 'react';
import { getImages } from "../services/pics.js";
import { motion, AnimatePresence } from "framer-motion"



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
      <h1 id='header-Home'>Very Cool NASA Images</h1>
      <AnimatePresence>
        <motion.div 
          id='images-container-Home'
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }} 
        >
          {
            images.map( (item, i) => (
              <ImagePreview img={item} key={i}/>
            ))
          }
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default Home;