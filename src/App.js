import Home from "./pages/Home";
import EventForm from "./pages/EventForm";
import Events from "./pages/Events";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/create" element={<EventForm />} />
      <Route path="/events" element={<Events />} />
    </Routes>      
    </Router>
  );
}

export default App;
