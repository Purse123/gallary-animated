
import Navbar from "./component/Navbar";
import Welcome from "./component/Welcome";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="h-screen w-full overflow-hidden text-white">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Welcome />}/>
      </Routes>
    </div>
  );
}

export default App;
