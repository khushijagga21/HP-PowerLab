import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LoginBox from './Page/Login';
import Signup from './Page/SignUp';
import Home from './Page/Home';
import Ordering from './Page/Order';
import About from './Page/About';
import Tips from './Page/Tips'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginBox />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/order" element={<Ordering />} />
        <Route path="/about" element={<About />} />
        <Route path="/tips" element={<Tips />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
