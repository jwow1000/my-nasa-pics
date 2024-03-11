import {isUriImage}  from "../services/imgHandle.js";
import { useState, useEffect } from 'react';
import {getImage} from "../services/pics.js";
import { Link, useParams, useNavigate } from "react-router-dom";

function Image() {
  // define object to fill image info
  const [img, setImg] = useState({});
  
  // grab id from the endpoint's params
  let { id } = useParams();
  
  // fetch the image data function
  const fetchImg = async () => {
    const one = await getImage(id);
    
    setImg(one);
  }

  // use navigate to go to image screen
  let navigate = useNavigate();

  // use effect trigger
  useEffect(() => {
    fetchImg()
  }, []);
  
  
  return (
    <div>
      
      {
        (img.url) ? (

          ( isUriImage(img.url) ) ? (
            <img 
              src={ img.url } 
              alt={ img.title }
              className="image-imageDetail"
              >
                    
            </img>
          ) 
          : (
            <iframe
              src={ img.url } 
              className="video-imageDetail"
            >
  
            </iframe>
          )
        )
        : null
        
      }
      <Link to={`/edit-image/${id}`} id="link-Image"> Edit this Image </Link>
    </div>
  )
}



export default Image