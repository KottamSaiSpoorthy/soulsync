import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Section from "./pages/Section";
import Log from "./pages/Log";
import Signin from './pages/Signin';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Log />}/>
        <Route path='/signin' element={<Signin />}/>
        <Route path="/section" element={<Section />}/>
      </Routes>
    </Router>
  );
}

export default App;