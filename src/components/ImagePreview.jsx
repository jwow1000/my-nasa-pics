import {isUriImage, convertVid}  from "../services/imgHandle.js";
import { Link } from 'react-router-dom';

function ImagePreview( {img} ) {
  // test if an img
  const imgTest = isUriImage(img.url);
 
  
  return (
    <div className="imageContainer-imagePreview">
      <Link to={`image/${img._id}`}>
        <img 
          src={ (imgTest) ? img.url : convertVid(img.url)} 
          alt={img.title}
          className="image-imagePreview"
          >
                
        </img>
      </Link>
    </div>
  )
}

export default ImagePreview;