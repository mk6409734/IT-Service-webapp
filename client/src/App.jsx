import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Service from './pages/service';
import Register from './pages/register';
import Login from './pages/login';
import Navbar from './components/Navbar';
import './App.css'
import Footer from './components/footer';
import Error from './pages/error';
import Logout from './pages/logout';
import AdminLayout from './components/layouts/admin-layout';
import AdminUsers from './pages/admin-users';
import AdminContact from './pages/admin-contact';
import UpdateUser from './pages/admin-update';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contact" element={<AdminContact />} />
            <Route path="users/:id/edit" element={<UpdateUser />}/>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;