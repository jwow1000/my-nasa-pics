import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editImage, deleteImage, getImage } from "../services/pics.js";
import "./ImageEdit.css";

function ImageEdit() {
  // define empty object that fits the model
  const [img, setImg] = useState({});
  
  // use params fo id
  let { id } = useParams();

  // fetch the image data from id
  const fetchImg = async () => {
    const one = await getImage(id);
    setImg(one);
  }

  // call the image data
  useEffect(() => {
    fetchImg()
  }, []);
  
  // use navigation
  let navigate = useNavigate();

  // submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    await editImage(id, img);
    navigate(`/image/${id}`);
  };

  // handle state changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setImg((prevImg) => ({
      ...prevImg,
      [name]: value,
    }));
  };

  // handle the delete button
  const handleDelete = async () => {
    await deleteImage(id);
    // nav back to home
    navigate("/");
  }


  return (
    <div id="container-ImageEdit">
      
      <h1 id="header-ImageEdit">Edit this image in our Database! please be nice 😬</h1>
      <form onSubmit={handleSubmit} id="form-ImageEdit">
        <input
          type="text"
          name="title"
          placeholder={img.title}
          value={img.title}
          onChange={handleChange}
          className="input-ImageEdit"
        />
        <input
          type="text"
          placeholder={img.date}
          name="date"
          value={img.date}
          onChange={handleChange}
          className="input-ImageEdit"

        />
        <textarea
          type="text"
          id="explanation-ImageEdit"
          placeholder={img.explanation}
          name="explanation"
          value={img.explanation}
          onChange={handleChange}
          

        />
        <input
          type="text"
          placeholder={img.url}
          name="url"
          value={img.url}
          onChange={handleChange}
          className="input-ImageEdit"

        />
        
        <button type="submit" id="subButton-ImageEdit">Save Edits!</button>
        
      </form>
      <button 
        id="delButton-ImageEdit" 
        onClick={() => { 
          if (window.confirm('U sure you want to delete this item?')) {
            handleDelete();
            
          } else {
            
          }
        } }
      > Delete This Item</button>
      
    </div>
  );
}

export default ImageEdit;
