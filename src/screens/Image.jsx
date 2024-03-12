import {isUriImage, youtube_parser}  from "../services/imgHandle.js";
import { useState, useEffect, useRef } from 'react';
import {getImage} from "../services/pics.js";
import { Link, useParams} from "react-router-dom";
import { motion } from "framer-motion"
import "./Image.css";

function Image({ images, imgIndex, setImgIndex }) {
  const imgRef = useRef(null);
  
  // define object to fill image info
  const [img, setImg] = useState({});
  
  // grab id from the endpoint's params
  let { id } = useParams();
  
  // fetch the image data function
  const fetchImg = async () => {
    const one = await getImage(id);

    const iIndex = images.findIndex((img) => {
      return img._id === id
    })

    setImgIndex(iIndex)
    setImg(one);
  }

  // use effect trigger
  useEffect(() => {
    fetchImg();
  }, [id]);
  // -------------------------------- full screen stuff ----------------
  // define enter fullscreen function
  const enterFullscreen = () => {
    const elem = imgRef.current;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      elem.webkitRequestFullscreen();
    }
  };

  // define exit fullscreen function
  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  };

  // handle full screen toggle
  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  // make an embed from any type of youtube link
  const handleUtubeURL = (path) => {
    const link = youtube_parser(path);
    console.log('ehats this link look like', link);
    const embed = `https://www.youtube.com/embed/${link}`;
    return embed ? embed : null;

  }
  // handle previous Link
  const imgScrub = (i, step) => {
    let iOut = 0;
    if( (i + step) > (images.length-1) ) {
      iOut = 0;
    } else if( (i + step) < 0 ) {
      iOut = images.length-1;
    } else {
      iOut = i + step;
    }
    return iOut;
  }
  
  
  return (
    <div>
     
      <h1 className="text-Image" id="header-Image">{img.title}</h1>
      {
        (img.url) ? (

          ( isUriImage(img.url) ) ? (
            <motion.img 
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0 }} 
              src={ img.url } 
              alt={ img.title }
              onClick={handleFullscreen}
              className="image-imageDetail"
              ref={imgRef}
              >
                    
            </motion.img>
          ) 
          : (
            <iframe
              src={ handleUtubeURL(img.url) }
              title={img.title} 
              className="video-imageDetail"
              allowFullScreen="true"
              frameBorder = "0"
            >
  
            </iframe>
          )
        )
        : null
        
      }
      <h2 className="text-Image" id="date-Image"><span>Date & Time: </span>{img.date}</h2>
      <h3 className="text-Image" id="description-Image">{img.explanation}</h3>
   
      <Link to={`/edit-image/${id}`} id="link-Image"> Edit this Image </Link>
      <Link id="prevButton-Image" to={`/image/${images[imgScrub(imgIndex, 1)]?._id}`}>
        <button>Previous Image</button>
      </Link>
      <Link id="nextButton-Image" to={`/image/${images[imgScrub( imgIndex,  -1)]?._id}`}>
        <button>Next Image</button>
      </Link>
     
    </div>
  )
}



export default Image