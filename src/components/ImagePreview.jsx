import {isUriImage, convertVid}  from "../services/imgHandle.js";


function ImagePreview( {img} ) {
  // test if an img
  const imgTest = isUriImage(img.url);
  // if image print, if not convert video link to thumbnail
  console.log('img path',(imgTest) ? img.url : convertVid(img.url));
  return (
    <div className="imageContainer-imagePreview">
      
      <img 
        src={ (imgTest) ? img.url : convertVid(img.url)} 
        alt={img.title}
        className="image-imagePreview"
        >
              
      </img>

      

    </div>
  )
}



export default ImagePreview