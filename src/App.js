
import Navbar from "./component/Navbar";
import Welcome from "./component/Welcome";
import { Routes, Route } from 'react-router-dom';
import Gallery from "./component/gallery/Gallery";

function App() {
  return (
    <div className="h-screen w-full text-white">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='/gallery' element={<Gallery />}/>
      </Routes>
    </div>
  );
}

export default App;
