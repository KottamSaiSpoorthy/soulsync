import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Section from "./pages/Section";
import Log from "./pages/Log";
<<<<<<< HEAD
import Signin from './pages/Signin';
=======
>>>>>>> d4a93cc1f69a0004d0858d5e266883d8bf60b35b
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Log />}/>
<<<<<<< HEAD
        <Route path='/signin' element={<Signin />}/>
=======
>>>>>>> d4a93cc1f69a0004d0858d5e266883d8bf60b35b
        <Route path="/section" element={<Section />}/>
      </Routes>
    </Router>
  );
}

export default App;