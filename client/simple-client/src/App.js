import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

import UsersList from "./pages/user/UsersList";
import CreateUser from "./pages/user/CreateUser";
import RetriveUser from "./pages/user/RetriveUser";
import EditUser from "./pages/user/EditUser";
import RemoveUser from "./pages/user/RemoveUser";
import Contact from "./pages/static/Contact";
import Aboutus from "./pages/static/Aboutus"




const App = () => {
  return (
    <>
    
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<UsersList />} /> 
          <Route path="/create" element={<CreateUser />} />
          <Route path="/:userId" element={<RetriveUser />} />
          <Route path='/edit/:userId' element={<EditUser />} />
          <Route path='/remove/:userId' element={<RemoveUser />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<Aboutus />} />
        </Routes>
       </BrowserRouter>
     
      
    </>
  );
}

export default App;
