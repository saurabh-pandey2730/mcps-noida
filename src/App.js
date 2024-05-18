import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Nav1 from './pages/Navbar/Navbar';
import Footer from './pages/Footer/Footer';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import CreateUser from './pages/Users/CreateUser';
import UpdateUser from './pages/Users/UpdateUser';
import DashBoard from './pages/Dashboard/DashBoard';
import Main from './pages/Faculty/Main';
import DashboardAdmin from './components/Admin/DashboardAdmin';
function App() {
  return (
    <div>
      
   <Nav1/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<h1>Invalid path</h1>} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/create' element={<CreateUser/>} />
        <Route path='/update' element={<UpdateUser/>} />
        <Route path='/admin' element={<DashBoard/>} />
        <Route path='/faculty' element={<Main/>} />
        <Route path='/d' element={<DashboardAdmin/>} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
