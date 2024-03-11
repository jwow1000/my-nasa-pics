import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editImage, deleteImage, getImage } from "../services/pics.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./ImageEdit.css";

function ImageEdit() {
  // define empty object that fits the model
  const [img, setImg] = useState({});
  
  // check control flow
  const [deleteUsure, setDeleteUsure] = useState( false );
  const [deleteGo, setDeleteGo] = useState( 0 );
 
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
    navigate("/");
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
  const doDelete = async () => {
    await deleteImage(id);
    // nav back to home
    navigate("/");
  }

  const handleDelete = () => {
    if(!deleteUsure) setDeleteUsure(true);
    if(deleteUsure) {
        if(deleteGo === 1) {
            doDelete();
            setDeleteUsure(false);
            setDeleteGo(0);
        }
        if(deleteGo === 2) {
            setDeleteUsure(false);
            setDeleteGo(0);
        }
    }
  }

  return (
    <div id="container-ImageEdit">
      {
        (deleteUsure) ? (
            <div> U SURE!?
                <button onClick={setDeleteGo(1)}>yea</button>
                <button onClick={setDeleteGo(2)}>no</button>
            </div>
        ) : null
      }
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
      <button onClick={handleDelete} id="delButton-ImageEdit">Delete this whole thing</button>
    </div>
  );
}

export default ImageEdit;
