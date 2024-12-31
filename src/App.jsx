import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import LoginBox from './Page/Login';
import Signup from './Page/SignUp';
import Home from './Page/Home';
import Ordering from './Page/Order';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginBox />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/order" element={<Ordering />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
