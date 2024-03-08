import Nav from "./components/Nav.jsx";
import Home from "./screens/Home.jsx";
import Cats from "./screens/Cats.jsx";
import CatDetail from "./screens/CatDetail.jsx";
import CatCreate from "./screens/CatCreate.jsx";
import CatEdit from "./screens/CatEdit.jsx";
import {Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/cats" element={ <Cats /> }/>
        <Route path="/add-cat" element={ <CatCreate /> }/>
        <Route path="/cats/:id" element={ <CatDetail /> }/>
        <Route path="/cats/:id/edit" element={ <CatEdit /> }/>
      </Routes>

     
    </div>
  );
}

export default App;
