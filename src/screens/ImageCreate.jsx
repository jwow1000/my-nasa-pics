import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createImage } from "../services/pics.js";

function ImageCreate() {
  // define empty object that fits the model
  const [img, setImg] = useState({
    date: "",
    explanation: "",
    title: "",
    url: ""
  });

  // use navigation
  let navigate = useNavigate();

  // submit function
  const handleSubmit = async (e) => {
    e.preventDefault();

    await createImage(img);
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

  return (
    <div>
      <h1>Add your own sick space image in our Database! please be nice 😬</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Give us a short title"
          value={img.title}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Insert date+time: YEAR-MONTH-DAY 24:00"
          name="date"
          value={img.date}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Give us an indepth explanation"
          name="explanation"
          value={img.explanation}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="complete url for your image"
          name="url"
          value={img.url}
          onChange={handleChange}
        />
        
        <button type="submit">Submit your Image!</button>
      </form>
    </div>
  );
}

export default ImageCreate;